<template>
  <header>
    <app-drawer>
      <div :class="classNames">
        <div class="content__layout content__layout--md">
          <div class="content__row nested-group">
            <app-mobile-profile/>
            <nuxt-link to="/search" class="search">
              <SvgSprite symbol="search" class="search__icon"/>
            </nuxt-link>
          </div>
        </div>
        <div class="content__layout content__layout--md">
          <app-mobile-location/>
        </div>
        <div class="content__layout">
          <app-header-mobile-menu/>
        </div>
        <div class="content__group">
          <div class="content__separator"/>
          <div class="content__layout">
            <app-header-mobile-nav/>
          </div>
        </div>
      </div>
    </app-drawer>

    <app-logo/>
    <nuxt-link to="/search" class="search">
      <SvgSprite symbol="search" class="search__icon"/>
    </nuxt-link>
    <app-call/>
    <app-cart/>
  </header>

  <app-notification/>
</template>

<script setup>
import AppNotification from '@/components/header/AppNotification.vue';
import AppDrawer from '@/components/shared/AppDrawer.vue';

import AppCall from '@/components/header/AppCall.vue';
import AppLogo from '@/components/header/AppLogo.vue';
import AppCart from '@/components/header/AppCart.vue';

import AppMobileLocation from './AppMobileLocation.vue';
import AppHeaderMobileMenu from './AppHeaderMobileMenu.vue';
import AppHeaderMobileNav from './AppHeaderMobileNav.vue';
import AppMobileProfile from './AppMobileProfile';

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
  position: relative;
  width: 100%;
  height: 100%;
  padding: 12px 0;
  box-sizing: border-box;
  overflow: hidden;

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

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

.search {
  padding: 6px;

  &:last-child {
    margin-right: -6px;
  }

  &__icon {
    width: 20px;
    height: 20px;
    fill: $color-dark-grey;
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
