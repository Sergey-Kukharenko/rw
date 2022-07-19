<template>
  <swiper
    :thumbs="{ swiper: thumbsSwiper }"
    v-bind="options"
    :modules="modules"
    class="swiper"
  >
    <swiper-slide v-for="(slide, idx) in props.items.desktop" :key="idx">
      <img :src="slide.img" :alt="slide.img" style="width: 100%" />
    </swiper-slide>
  </swiper>

  <swiper
    @swiper="setThumbsSwiper"
    v-bind="optionsThumbs"
    :modules="modules"
    class="swiper-thumbs"
  >
    <swiper-slide v-for="(slide, idx) in props.items.desktop" :key="idx">
      <img :src="slide.img" :alt="slide.img" style="width: 100%" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import {
  FreeMode,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Thumbs,
} from 'swiper'

const props = defineProps({
  items: {
    type: Object,
    default: () => ({}),
  },
})

const modules = [FreeMode, Pagination, Navigation, Mousewheel, Keyboard, Thumbs]

const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}

const options = {
  slidesPerView: 1,
}

const optionsThumbs = {
  spaceBetween: 10,
  slidesPerView: 4,
  watchSlidesProgress: true,
}
</script>

<style lang="scss">
@import 'swiper/scss';
@import 'swiper/scss/free-mode';
@import 'swiper/scss/pagination';
@import 'swiper/scss/thumbs';

.swiper {
  @include xs {
    padding: 0 6px;
    margin: 0 -6px;
  }
}
</style>
