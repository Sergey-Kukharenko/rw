<template>
  <swiper
    :slides-per-view="4"
    :space-between="16"
    :freeMode="true"
    :navigation="false"
    :pagination="false"
    :modules="modules"
    v-bind="{ ...options }"
    class="swiper"
  >
    <swiper-slide v-for="(slide, idx) in slides" :key="idx">
      <slot v-bind="{ ...slide }"></slot>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

const props = defineProps({
  options: Object,
  slides: Array,
});

const modules = [FreeMode, Pagination, Navigation, Mousewheel, Keyboard];
</script>

<style lang="scss" scoped>
.swiper {
  @include xs {
    padding: 0 6px;
    margin: 0 -6px;
  }
}
</style>
