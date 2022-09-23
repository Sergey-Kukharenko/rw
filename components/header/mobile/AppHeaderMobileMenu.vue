<template>
  <app-mobile-menu
    :list="menu"
    @selectItem="onSelectItem"
    class="nested-group"
  />
  <app-drawer-nested
    :visible="isVisible"
    @close="close"
    :title="subTitle"
  >
    <app-mobile-sub-menu :list="subMenu" />
  </app-drawer-nested>
</template>

<script setup>
import AppDrawerNested from '@/components/header/AppDrawerNested'
import AppMobileMenu from '@/components/header/mobile/AppMobileMenu.vue'
import AppMobileSubMenu from '@/components/header/mobile/AppMobileSubMenu.vue'

import dataMenu from '@/data/menu.js'
const menu = ref(dataMenu)

const isVisible = ref(false)

const open = () => {
  isVisible.value = true
}

const close = () => {
  isVisible.value = false
}

const selected = ref(0)

const subTitle = computed(() => menu.value[selected.value].title)
const subMenu = computed(() => menu.value[selected.value].children)
const hasSubMenu = computed(
  () => menu.value[selected.value].children.length > 0
)

const onSelectItem = (idx) => {
  selected.value = idx
  hasSubMenu.value && open()
}

const { updateVisibility } = inject('visibility')

watchEffect(() => {
  updateVisibility(isVisible.value)
})
</script>

