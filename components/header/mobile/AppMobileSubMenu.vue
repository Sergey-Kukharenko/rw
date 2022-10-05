<template>
  <app-mobile-link v-if="isLink" :link="props.link" />
  <app-mobile-list v-if="isList" :list="props.list" />

  <template v-if="isAll">
    <app-mobile-tiles :section="props.categories" />
    <app-mobile-section :section="props.by.price" />
    <app-mobile-products :section="props.products" />
  </template>

  <div v-if="isRoses" class="group-sections">
    <app-mobile-section :section="props.by.quantity" />
    <app-mobile-tiles
      :section="props.categories"
      theme="outline"
    />
    <app-mobile-products :section="props.products" size="md" />
    <app-mobile-section :section="props.by.look" />
    <app-mobile-section :section="props.by.height" />
  </div>
</template>

<script setup>
import AppMobileLink from './AppMobileLink'
import AppMobileList from './AppMobileList'
import AppMobileTiles from './AppMobileTiles'
import AppMobileSection from './AppMobileSection'
import AppMobileProducts from './AppMobileProducts'

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  },

  link: {
    type: Object,
    default: () => ({})
  },

  categories: {
    type: Object,
    default: () => ({})
  },

  by: {
    type: Object,
    default: () => ({})
  },

  products: {
    type: Object,
    default: () => ({})
  },

  type: {
    type: String,
    default: ''
  }
})

const isLink = computed(() => props.link.text)
const isList = computed(() => props.list?.length > 0)
const isAll = computed(() => props.type === 'all')
const isRoses = computed(() => props.type === 'roses')
</script>

<style lang="scss">
.group-sections {
  & .section:not(:last-child) {
    border-bottom: 1px solid #dde0e6;
  }
}
</style>
