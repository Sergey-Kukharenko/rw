<template>
  <app-mobile-link v-if="isLink" :link="link" />
  <app-mobile-list :list="list" />
  <app-mobile-tiles :list="deals" />
  <app-mobile-section v-if="isSectionByPrice" :section="sectionByPrice" />
</template>

<script setup>
import AppMobileList from './AppMobileList'
import AppMobileLink from './AppMobileLink'
import AppMobileTiles from './AppMobileTiles'
import AppMobileSection from './AppMobileSection'

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
  },

  sectionByPrice: {
    type: Object,
    default: () => ({})
  }
})

const isLink = computed(() => props.link.text)
const isSectionByPrice = computed(() => props.sectionByPrice)

</script>

<style lang="scss" scoped>
</style>
