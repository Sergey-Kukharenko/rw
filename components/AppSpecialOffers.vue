<template>
  <section class="layout section">
    <app-section-header v-bind="{ headerProps }" />
    <app-section-grid v-slot="slotProps" :slides="slides">
      <app-card :slide="{ ...slotProps }" />
    </app-section-grid>
  </section>
</template>

<script setup>
import AppSectionHeader from '~~/components/shared/AppSectionHeader.vue'
import AppSectionGrid from '@/components/shared/AppSectionGrid.vue'
import AppCard from '@/components/shared/AppCard.vue'
import dataSpecialOffers from '@/data/special-offers'
const { main, list } = dataSpecialOffers

const headerProps = ref(main)
const slides = ref(list)
</script>

<style lang="scss"></style>
