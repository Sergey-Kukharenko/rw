<template>
  <app-mobile-link v-if="isLink" :link="link" />
  <app-mobile-list v-if="isList" :list="list" />
  <app-mobile-tiles v-if="isDeals" :list="deals" />
</template>

<script setup>
import AppMobileList from './AppMobileList'
import AppMobileLink from './AppMobileLink'
import AppMobileTiles from './AppMobileTiles'

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  },

  link: {
    type: Object,
    default: () => ({})
  },

  deals: {
    type: Array,
    default: () => []
  }
})

const isLink = computed(() => props.link.text)
const isList = computed(() => props.list.length > 0)
const isDeals = computed(() => props.deals.length > 0)
</script>

<style lang="scss" scoped>
</style>
