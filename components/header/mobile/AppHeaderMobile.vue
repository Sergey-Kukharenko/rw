<template>
  <header>
    <app-drawer>
      <app-navigation/>
      <app-menu/>
      <app-nav-bar/>

<!--      <div :class="classNames">-->
<!--        <app-location/>-->
<!--        <app-header-mobile-menu/>-->
<!--        <app-header-mobile-nav/>-->
<!--      </div>-->
    </app-drawer>

    <app-logo/>
    <app-search/>
    <app-call/>
    <app-cart/>
  </header>

  <app-notification/>
</template>

<script setup>
import AppNotification from '@/components/header/AppNotification.vue';
import AppNavigation from '@/components/header/AppNavigation.vue';
import AppMenu from '@/components/header/AppMenu.vue';
import AppNavBar from '@/components/header/AppNavBar.vue';
import AppDrawer from '@/components/shared/AppDrawer.vue';

import AppCall from '@/components/header/AppCall.vue';
import AppLogo from '@/components/header/AppLogo.vue';
import AppSearch from '@/components/header/AppSearch.vue';
import AppCart from '@/components/header/AppCart.vue';

import AppLocation from '@/components/header/AppLocation.vue';
import AppHeaderMobileMenu from './AppHeaderMobileMenu.vue';
import AppHeaderMobileNav from './AppHeaderMobileNav.vue';
import AppSome from './AppSome.vue';

const isVisible = ref(false);
const classNames = computed(() =>
  useToggleClassName(isVisible.value, 'content', 'active')
);

const open = () => {
  isVisible.value = true;
};

const close = () => {
  isVisible.value = false;
};

const updateVisibility = (payload) => {
  isVisible.value = payload;
};

provide('visibility', {
  updateVisibility
});
</script>

<style lang="scss" scoped>
header {
  @include lt-md {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 4;
    height: 50px;
    padding: 0 16px;
    background: #fff;
    box-sizing: border-box;
  }
}

.content {
  height: calc(100% + 24px);
  margin: -12px;
  overflow: hidden;
  position: relative;
  width: calc(100% + 24px);

  &--active {
    .link {
      opacity: 0;
      transform: translateX(-40%);
    }
  }
}

.layer {
}
</style>

<style lang="scss">
.nested-group {
  opacity: 1;
  transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;
}

.content {
  &--active {
    .nested-group {
      opacity: 0;
      transform: translateX(-40%);
    }
  }
}
</style>
