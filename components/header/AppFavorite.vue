<template>
  <a class="card favorite">
    <figure class="card__figure">
      <SvgSprite symbol="heart" class="card__icon" />
    </figure>
    <app-counter theme="pink" v-if="isCount">{{ count }}</app-counter>
    <figcaption class="card__figcaption">Favorite</figcaption>
  </a>
</template>

<script setup>
import AppCounter from '@/components/shared/AppCounter.vue'

const count = ref(12)
const isCount = computed(() => count.value > 0)
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  cursor: pointer;

  @include lt-md {
    display: none;
  }

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin: 0 auto;
  }

  &__icon {
    width: 20px;
    height: 18.5px;
    fill: $color-light-grey;
  }

  &__figcaption {
    font-family: $golos-medium;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: $color-white-grey;
    margin-top: 7px;
  }

  &:hover {
    opacity: 0.75;
  }
}
</style>
