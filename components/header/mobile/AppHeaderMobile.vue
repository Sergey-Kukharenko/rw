<template>
  <header>
    <app-drawer>
      <app-navigation/>
      <app-menu/>
      <app-nav-bar/>

<!--      <div :class="classNames">-->
<!--        <div class="content__layout content__layout&#45;&#45;md">-->
<!--          <app-mobile-location />-->
<!--        </div>-->
<!--        <div class="content__layout">-->
<!--          <app-header-mobile-menu />-->
<!--        </div>-->
<!--        <div class="content__group">-->
<!--          <div class="content__separator" />-->
<!--          <div class="content__layout">-->
<!--            <app-header-mobile-nav />-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

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

import AppMobileLocation from './AppMobileLocation.vue'
import AppHeaderMobileMenu from './AppHeaderMobileMenu.vue'
import AppHeaderMobileNav from './AppHeaderMobileNav.vue'
import AppSome from './AppSome.vue'

const isVisible = ref(false)
const classNames = computed(() =>
  useToggleClassName(isVisible.value, 'content', 'active')
)

const open = () => {
  isVisible.value = true
}

const close = () => {
  isVisible.value = false
}

const updateVisibility = (payload) => {
  isVisible.value = payload
}

provide('visibility', {
  updateVisibility
})
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
  position: relative;
  width: 100%;
  height: calc(100% + 24px);
  overflow: hidden;

  &__layout {
    padding: 0 24px;
    box-sizing: border-box;

    &--md {
      padding: 0 16px;
    }
  }

  &__separator {
    width: 100%;
    height: 1px;
    background: #dde0e6;
    opacity: 1;
    transition: opacity 0.15s ease 0.15s;
  }

  &__group {
    margin-top: 16px;
  }

  &--active {
    .link {
      opacity: 0;
      transform: translateX(-40%);
    }

    & .content__separator {
      opacity: 0;
      transition: opacity 0.15s ease 0s;
    }
  }
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
      transform: translateX(-100%);
    }
  }
}
</style>
