<template>
  <div class="rating">
    <div class="rating__text">Overall rating</div>
    <div class="rating__group group">
      <div class="group__number">
        {{ props.rating.count }}
      </div>
      <div class="group__separator"></div>
      <div class="group__text">
        {{ props.rating.text }}
      </div>
    </div>
    <app-stars-rating :rating="props.rating.count" />
    <app-rating-list :rating="props.rating" />
  </div>
</template>

<script setup>
import AppStarsRating from '@/components/ui/AppStarsRating.vue'
import AppRatingList from '@/components/card-product/AppRatingList.vue'

const props = defineProps({
  rating: {
    type: Object,
    default: () => {},
  },
})
</script>

<style lang="scss" scoped>
.rating {
  &__text {
    font-family: $golos-bold;
    font-size: 16px;
    line-height: 20px;
    color: #000;
  }

  &__group {
    margin: 36px 0 12px;
  }
}

.group {
  display: flex;

  &__number {
    font-family: $Literata;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    color: #000000;
  }

  &__separator {
    width: 1px;
    background: #dde0e6;
    margin: 0 17px;
  }

  &__text {
    max-width: 164px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #7e8895;
  }
}
</style>