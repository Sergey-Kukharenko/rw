<template>
  <swiper
    :thumbs="{ swiper: thumbsSwiper }"
    v-bind="options"
    :modules="modules"
    class="swiper swiper--gallery"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(slide, idx) in props.items.slides" :key="idx">

      <video
        v-if="slide.video"
        :src="slide.video"
        preload="none"
        ref="video"
        loop
        muted
        class="video"
      ></video>

      <app-gallery-card v-else :slide="slide"/>
    </swiper-slide>
  </swiper>

  <swiper
    v-bind="optionsThumbs"
    :modules="modules"
    class="swiper-thumbs"
    @swiper="setThumbsSwiper"
  >
    <swiper-slide v-for="(slide, idx) in props.items.thumbs" :key="idx">
      <div class="thumbs-item">
        <img :src="slide.img" :alt="slide.img" class="thumbs-item__img"/>
        <div class="thumbs-item__border absolute-grow"/>
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
  Thumbs
} from 'swiper';

import AppGalleryCard from '@/components/shared/AppGalleryCard.vue';

const props = defineProps({
  items: {
    type: Object,
    default: () => ({})
  }
});

const modules = [FreeMode, Pagination, Navigation, Mousewheel, Keyboard, Thumbs];

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const options = {
  pagination: true,
  watchSlidesProgress: true,

  breakpoints: {
    599: {
      spaceBetween: 0
    },
    959: {
      spaceBetween: 66
    }
  }
};

const optionsThumbs = {
  spaceBetween: 4,
  slidesPerView: 4,
  watchSlidesProgress: true,
  slideToClickedSlide: true
};

const video = ref(null);

const getArrayOfIdxs = () => {
  let idxs = [];

  props.items.slides.map((obj, idx) => {
    if (obj.video) idxs.push(idx);
  });
  return idxs;
};
const arrIdxs = getArrayOfIdxs();
const isMatchesIdxs = value => arrIdxs.find(item => item === value);

const onSlideChange = (swiper) => {
  const vp = video.value[0];
  if (isMatchesIdxs(swiper.activeIndex)) {
    vp.play();
  } else {
    vp.pause();
  }
};
</script>

<style lang="scss">
@import 'swiper/scss';
@import 'swiper/scss/free-mode';
@import 'swiper/scss/pagination';
@import 'swiper/scss/navigation';
@import 'swiper/scss/thumbs';

.swiper.swiper--gallery {
  @include xs {
    padding: 0;
    margin: 0 -14px;
  }
}

.thumbs-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 66px;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  transition: border-color 0.35s ease 0s;

  &__img {
    display: block;
    width: 60px;
    height: 60px;
    object-fit: cover;
    position: relative;
    z-index: 1;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease-out 0s;
  }

  &__border {
    border: 2px solid $color-green;
    border-radius: 12px;
    opacity: 0;
    transform: scale(1.04);
    transition: 0.3s ease-out 0s;
  }
}

.swiper {
  user-select: none;

  &.swiper-thumbs {
    @include gt-xs {
      max-width: 276px;
      margin: 12px auto 0 -4px;
    }

    @include xs {
      display: none;
    }
  }
}

.swiper.swiper--gallery {
  .swiper-pagination-horizontal {
    @include gt-xs {
      display: none;
    }

    .swiper-pagination-bullet {
      background: rgba(255, 255, 255, 0.5);
    }

    .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background: rgba(255, 255, 255, 1);
    }
  }
}

.swiper-slide-thumb-active .thumbs-item__border {
  opacity: 1;
  transform: scale(1);
}

.swiper-slide-thumb-active .thumbs-item__img {
  transform: scale(0.98);
}

.video{
  width: 100%;
  border-radius: 12px;
}
</style>
