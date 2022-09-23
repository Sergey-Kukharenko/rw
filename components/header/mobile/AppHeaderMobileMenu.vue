<template>
  <app-mobile-menu
    :list="menu"
    @selectItem="onSelectItem"
    class="nested-group"
  />
  <app-drawer-nested
    :visible="isVisible"
    @close="close"
    :title="title"
  >
    <app-mobile-sub-menu
      :list="list"
      :link="link"
      :deals="deals"
    />
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

const isSubLevel = computed(() => menu.value[selected.value].hasSubLevel)

const title = computed(() => menu.value[selected.value].title)
const list = computed(() => menu.value[selected.value].list)
const link = computed(() => menu.value[selected.value].link)
const deals = computed(() => menu.value[selected.value].deals)


const onSelectItem = (idx) => {
  selected.value = idx
  isSubLevel.value && open()
}

const { updateVisibility } = inject('visibility')

watchEffect(() => {
  updateVisibility(isVisible.value)
})
</script>

