<template>
  <section class="layout bestsellers">
    <app-section-header v-bind="{ headerProps }" />
    <app-swiper
      :slides="slides"
      :options="options"
      v-slot="slotProps"
      class="layout__row"
    >
      <app-card :slide="{ ...slotProps }" />
    </app-swiper>
  </section>
</template>

<script setup>
import AppSectionHeader from '@/components/AppSectionHeader.vue';
import AppSwiper from '@/components/ui/AppSwiper.vue';
import AppCard from '@/components/ui/AppCard.vue';
import dataBestsellers from '@/data/bestsellers';

const { main, list } = dataBestsellers;

const headerProps = ref(main);
const slides = ref(list);

const options = {
  slidesPerView: 2,
  spaceBetween: 8,
  breakpoints: {
    599: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    959: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
};
</script>
