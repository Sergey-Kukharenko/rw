<template>
  <swiper
    :thumbs="{ swiper: thumbsSwiper }"
    v-bind="options"
    :modules="modules"
    class="swiper"
  >
    <swiper-slide v-for="(slide, idx) in props.items.slides" :key="idx">
      <app-gallery-card :slide="slide"/>
    </swiper-slide>
  </swiper>

  <swiper
    @swiper="setThumbsSwiper"
    v-bind="optionsThumbs"
    :modules="modules"
    class="swiper-thumbs"
  >
    <swiper-slide v-for="(slide, idx) in props.items.thumbs" :key="idx">
      <div class="thumbs-item">
        <img :src="slide.img" :alt="slide.img" class="thumbs-item__img"/>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {
  FreeMode,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Thumbs,

} from 'swiper';

import AppGalleryCard from '@/components/shared/AppGalleryCard.vue';

const props = defineProps({
  items: {
    type: Object,
    default: () => ({}),
  },
});

const modules = [FreeMode, Pagination, Navigation, Mousewheel, Keyboard, Thumbs];

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const options = {
  slidesPerView: 1,
  spaceBetween: 12,
};

const optionsThumbs = {
  spaceBetween: 12,
  slidesPerView: 4,
  watchSlidesProgress: true,
};
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

.thumbs-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 68px;
  border: 3px solid transparent;
  border-radius: 12px;
  box-sizing: border-box;
  cursor: pointer;
  transition: border-color 0.35s ease 0s;

  &__img {
    display: block;
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 12px;
    overflow: hidden;
  }
}

.swiper.swiper-thumbs{
  max-width: 308px;
  margin: 12px auto 0 0;
}

.swiper-slide-thumb-active .thumbs-item {
  border: 3px solid $color-green;
}
</style>
