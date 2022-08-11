<template>
  <header>
    <app-drawer>
      <app-navigation />
      <app-menu />
      <app-nav-bar />
    </app-drawer>

    <app-logo />
    <app-search />
    <app-call />
    <app-cart />
  </header>

  <app-notification />
</template>

<script setup>
import AppNotification from '@/components/header/AppNotification.vue'
import AppNavigation from '@/components/header/AppNavigation.vue'
import AppMenu from '@/components/header/AppMenu.vue'
import AppNavBar from '@/components/header/AppNavBar.vue'
import AppDrawer from '@/components/shared/AppDrawer.vue'

import AppCall from '@/components/header/AppCall.vue'
import AppLogo from '@/components/header/AppLogo.vue'
import AppSearch from '@/components/header/AppSearch.vue'
import AppCart from '@/components/header/AppCart.vue'
</script>

<style lang="scss" scoped>
header {
  @include gt-sm {
  }

  @include lt-md {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 3;
    height: 50px;
    padding: 0 18px;
    background: #fff;
    box-sizing: border-box;
  }
}
</style>
