<template>
  <header>
    <app-drawer>
                        <app-navigation/>
                        <app-menu/>
                        <app-nav-bar/>

<!--      <div :class="classNames">-->
<!--        <div class="layer">-->
<!--          <app-logo @click="[setComponent(markRaw(AppLogo)), open()]"/>-->
<!--          <app-mobile-menu :list="menu" @selectItem="onSelectItem" @click="selectedComponent = null"/>-->
<!--        </div>-->

<!--        <app-drawer-nested-->
<!--          :visible="isVisible"-->
<!--          :title="menu[selected].title"-->
<!--          @close="close"-->
<!--        >-->

<!--          <component v-if="selectedComponent" :is="selectedComponent"/>-->
<!--          <app-mobile-sub-menu v-else :list="menu[selected].children" />-->
<!--        </app-drawer-nested>-->
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

import AppDrawerNested from './AppDrawerNested'
import AppMobileMenu from './mobile/AppMobileMenu.vue'
import AppMobileSubMenu from './mobile/AppMobileSubMenu.vue'
import { markRaw } from 'vue'
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

const selected = ref(0)

const onSelectItem = (idx) => {
  selected.value = idx
  open()
}

const menu = ref([
  {
    title: 'Recipients',
    icon: 'tile',
    children: [
      {
        text: 'For mom',
        icon: 'tile'
      },
      {
        text: 'For partner',
        icon: 'tile'
      },
      {
        text: 'For friends',
        icon: 'tile'
      },
      {
        text: 'For colleagues',
        icon: 'tile'
      },
      {
        text: 'For Relatives',
        icon: 'tile'
      }
    ]
  },
  {
    title: 'Occassions',
    icon: 'tile',
    children: [
      {
        text: 'Birthday',
        icon: 'tile'
      },
      {
        text: 'Anniversary',
        icon: 'tile'
      },
      {
        text: 'Wedding anniversary',
        icon: 'tile'
      },
      {
        text: 'Date',
        icon: 'tile'
      },
      {
        text: 'Extract from the hospital',
        icon: 'tile'
      },
      {
        text: 'Housewarming',
        icon: 'tile'
      },
      {
        text: 'Graduation',
        icon: 'tile'
      },
      {
        text: 'An apology',
        icon: 'tile'
      },
      {
        text: 'Simply so',
        icon: 'tile'
      },
      {
        text: 'Wedding',
        icon: 'tile'
      }
    ]
  }
])

const selectedComponent = ref(null)

const setComponent = (name) => {
  selectedComponent.value = name
}
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
    .layer {
      opacity: 0;
      transform: translateX(-40%);
    }
  }
}

.layer{
  transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;
}

button {
  color: white;
  background: #7C7C7C;
}

.address{
  height: 400px;
  background: #7C7C7C;
}
</style>
