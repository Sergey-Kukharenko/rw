<template>
  <section class="layout">
    <app-swiper v-slot="slotProps" :slides="slides" :options="options">
      <app-reviews-card :slide="{ ...slotProps }" />
    </app-swiper>
  </section>
</template>

<script setup>
import AppSwiper from '@/components/ui/AppSwiper.vue'
import AppReviewsCard from '@/components/AppReviewsCard.vue'
import dataReviews from '@/data/reviews'

const slides = ref(dataReviews)

const options = {
  slidesPerView: 1,
  spaceBetween: 0,

}
</script>
