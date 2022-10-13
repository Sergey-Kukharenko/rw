<template>
  <section>
    <app-section-header v-bind="{ headerProps }" />
    <app-section-grid v-slot="slotProps" :slides="slides">
      <app-card :slide="{ ...slotProps }" />
    </app-section-grid>
  </section>
</template>

<script setup>
import dataSimilar from '@/data/similar'
import AppSectionHeader from '~~/components/shared/AppSectionHeader.vue'
import AppSectionGrid from '@/components/shared/AppSectionGrid.vue'
import AppCard from '@/components/shared/AppCard.vue'

const { main, list } = dataSimilar

const headerProps = ref(main)
const slides = ref(list)
</script>
