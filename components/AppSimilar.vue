<template>
  <section>
    <app-section-header v-bind="{ headerProps }" />
    <app-grid v-slot="slotProps" :slides="slides">
      <app-card :slide="{ ...slotProps }" />
    </app-grid>
  </section>
</template>

<script setup>
import AppSectionHeader from '@/components/AppSectionHeader.vue'
import AppGrid from '@/components/shared/AppGrid.vue'
import AppCard from '@/components/shared/AppCard.vue'
import dataSimilar from '@/data/similar'

const { main, list } = dataSimilar

const headerProps = ref(main)
const slides = ref(list)
</script>
