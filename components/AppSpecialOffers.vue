<template>
  <section class="layout section">
    <app-section-header v-bind="{ headerProps }" />
    <app-grid :slides="slides" v-slot="slotProps">
      <app-card :slide="{ ...slotProps }" />
    </app-grid>
  </section>
</template>

<script setup>
import AppSectionHeader from '@/components/AppSectionHeader.vue';
import AppGrid from '@/components/shared//AppGrid.vue';
import AppCard from '@/components/ui/AppCard.vue';
import dataBestsellers from '@/data/bestsellers';
const { main, list } = dataBestsellers;

const headerProps = ref(main);
const slides = ref(list);
</script>

<style lang="scss"></style>
