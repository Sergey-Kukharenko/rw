<template>
  <header>
    <app-drawer>
            <app-navigation/>
            <app-menu/>
            <app-nav-bar/>

<!--      <div :class="classNames">-->
<!--        <div class="link" @click="open">-->
<!--          <SvgSprite :symbol="menu.icon" class="link__icon"/>-->
<!--          <div class="link__text">{{ menu.title }}</div>-->
<!--        </div>-->

<!--        <app-drawer-nested :visible="isVisible" @close="close">-->
<!--          <template #header>-->
<!--            {{ menu.title }}-->
<!--          </template>-->
<!--          <template #container>-->
<!--            <div v-for="item in menu.children" :key="item">{{ item }}</div>-->
<!--          </template>-->
<!--        </app-drawer-nested>-->
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

import AppDrawerNested from './AppDrawerNested';

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

const menu = ref({
  title: 'Recipients',
  icon: 'tile',
  children: [
    'For mom',
    'For partner',
    'For friends',
    'For colleagues',
    'For Relatives',
    'For mom',
    'For partner',
    'For friends',
    'For colleagues',
    'For Relatives',
    'For mom',
    'For partner',
    'For friends',
    'For colleagues',
    'For Relatives',
    'For mom',
    'For partner',
    'For friends',
    'For colleagues',
    'For Relatives',
    'For mom',
    'For partner',
    'For friends',
    'For colleagues',
    'For Relatives',
    'For mom',
    'For partner',
    'For friends',
    'For colleagues',
    'For Relatives',
    'For mom',
    'For partner',
    'For friends',
    'For colleagues',
    'For Relatives',
    'For mom',
    'For partner',
    'For friends',
    'For colleagues',
    'For Relatives',
  ]
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
      transform: translateX(-20%);
    }
  }
}

.link {
  display: flex;
  align-items: center;
  padding: 12px;
  transition: opacity .25s ease 0s, transform .25s ease 0s;

  &__icon {
    width: 16px;
    height: 16px;
  }

  &__text {
    font-size: 12px;
    line-height: 16px;
    margin-left: 10px;
  }
}

</style>
