<template>
  <header>
    <app-drawer>
            <app-navigation/>
            <app-menu/>
            <app-nav-bar/>

<!--      <div :class="classNames">-->
<!--        <div class="link" @click="[selectItem(idx), open()]" v-for="(item, idx) in menu" :key="item">-->
<!--          <SvgSprite :symbol="item.icon" class="link__icon"/>-->
<!--          <div class="link__text">{{ item.title }}</div>-->
<!--        </div>-->

<!--        <app-drawer-nested :visible="isVisible" @close="close">-->
<!--          <template #header>-->
<!--            {{ menu[selected].title }}-->
<!--          </template>-->
<!--          <template #container>-->
<!--            <div v-for="item in menu[selected].children" :key="item">{{ item }}</div>-->
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

const selected = ref(0)

const selectItem = (idx) => {
  selected.value = idx
};

const menu = ref([
  {
    title: 'Recipients',
    icon: 'tile',
    children: [
      'For mom',
      'For partner',
      'For friends',
    ]
  },
  {
    title: 'Occassions',
    icon: 'organizer',
    children: [
      'For mom 2',
      'For partner 2',
      'For friends 2',
    ]
  }
]);

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

.link {
  display: flex;
  align-items: center;
  padding: 12px;
  transition: opacity .3s ease 0s, transform .3s ease 0s;

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
