<template>
  <app-mobile-menu :list="menu" @selectItem="onSelectItem"/>

  <app-drawer-nested :visible="isVisible" @close="close" :title="menu[selected].title">
    <app-mobile-sub-menu :list="menu[selected].children" />
  </app-drawer-nested>
</template>

<script setup>
import AppDrawerNested from '@/components/header/AppDrawerNested'
import AppMobileMenu from '@/components/header/mobile/AppMobileMenu.vue'
import AppMobileSubMenu from '@/components/header/mobile/AppMobileSubMenu.vue'

const isVisible = ref(false)

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
</script>
