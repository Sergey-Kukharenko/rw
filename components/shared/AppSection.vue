<template>
  <section class="layout section">
    <app-section-header :headerProps="props.section.main" />
    <app-section-grid v-slot="slotProps" :slides="props.section.list" :theme="props.theme">
      <app-card :slide="{ ...slotProps }" />
    </app-section-grid>
  </section>
</template>

<script setup>
import AppSectionHeader from '@/components/shared/AppSectionHeader.vue'
import AppSectionGrid from '@/components/shared/AppSectionGrid.vue'
import AppCard from '@/components/shared/AppCard.vue'

const props = defineProps({
  section: {
    type: Object,
    default: () => ({})
  },

  theme: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
</style>
