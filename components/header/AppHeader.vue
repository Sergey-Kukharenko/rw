<template>
  <header>
    <!--     <app-notification />-->
    <app-drawer>
      <app-navigation/>
      <app-menu/>
      <app-nav-bar/>
    </app-drawer>
  </header>
</template>

<script setup>
import AppNotification from '@/components/header/AppNotification.vue';
import AppNavigation from '@/components/header/AppNavigation.vue';
import AppMenu from '@/components/header/AppMenu.vue';
import AppNavBar from '@/components/header/AppNavBar.vue';
import AppDrawer from '@/components/shared/AppDrawer.vue';
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  z-index: 4;
  background: #fff;
}
</style>
