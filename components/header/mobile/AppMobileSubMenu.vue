<template>
  <app-mobile-link v-if="isLink" :link="link" />
  <app-mobile-list :list="list" />


  <template v-if="isAll">
    <app-mobile-tiles :list="deals" />
    <app-mobile-section :section="sectionByPrice" />
    <app-mobile-products :all="props.all" />
  </template>
</template>

<script setup>
import AppMobileList from './AppMobileList'
import AppMobileLink from './AppMobileLink'
import AppMobileTiles from './AppMobileTiles'
import AppMobileSection from './AppMobileSection'
import AppMobileProducts from './AppMobileProducts';

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
  },

  all: {
    type: Object,
    default: () => ({})
  },

  type: {
    type: String,
    required: ''
  },
})

const isLink = computed(() => props.link.text)
// const isSectionByPrice = computed(() => props.sectionByPrice)
// const isProducts = computed(() => props.all?.products?.length > 0)
const isAll = computed(() => props.type === 'all')
const isRoses = computed(() => props.type === 'roses')

</script>

<style lang="scss" scoped>
</style>
