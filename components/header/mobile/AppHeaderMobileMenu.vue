<template>
  <app-mobile-menu
    :list="menu"
    @selectItem="onSelectItem"
    class="nested-group"
  />
  <app-drawer-nested :visible="isVisible" @close="close" :title="title">
    <app-mobile-sub-menu
      v-bind="{ list, link, categories, by, products, type }"
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

const currentItem = computed(() => menu.value[selected.value])
const isSubLevel = computed(() => currentItem.value.hasSubLevel)

const title = computed(() => currentItem.value.title)
const list = computed(() => currentItem.value.list)
const link = computed(() => currentItem.value.link)
const categories = computed(() => currentItem.value?.categories)
const by = computed(() => currentItem.value?.by)
const products = computed(() => currentItem.value?.products)
const type = computed(() => currentItem.value?.type)

const onSelectItem = (idx) => {
  selected.value = idx
  isSubLevel.value && open()
}

const { updateVisibility } = inject('visibility')

watchEffect(() => {
  updateVisibility(isVisible.value)
})
</script>

