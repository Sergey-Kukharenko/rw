<template>
  <div class="card">
    <img :src="props.slide.img" :alt="props.slide.img" class="card__img" />
    <div v-if="props.slide.video">{{props.slide.video}}</div>
    <div class="card__overlay absolute-grow"></div>
    <div class="card__container absolute-grow">
      <div class="card__header header">
        <div class="header__item">
          <app-badge theme="red" size="md">
            {{ props.slide.sale.status }}
            {{ props.slide.sale.percent }}
          </app-badge>
        </div>
        <div class="header__item">
          <app-badge-rate-reviews
            :rating="props.slide.rating"
            :stars="1"
            :reviews="props.slide.reviews"
            :options="{ theme: 'full' }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppBadge from './AppBadge.vue'
import AppBadgeRateReviews from './AppBadgeRateReviews.vue'

const props = defineProps({
  slide: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  overflow: hidden;

  @include gt-xs {
    max-width: 528px;
    height: 528px;
    border-radius: 12px;
  }

  @include xs {
    padding-top: 100%;
  }

  &__img {
    display: block;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: transform 0.35s;

    @include xs {
      position: absolute;
      top: 0;
    }
  }

  &__overlay {
    // background: #ffffff;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.35s;
  }

  &:hover {
    .card__img {
      transform: scale(1.02);
    }

    .card__overlay {
      opacity: 0.1;
    }
  }

  &__container {
    padding: 16px;
    z-index: 3;
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &__item {
    &:not(:last-child) {
      margin-right: 6px;
    }
  }
}
</style>
