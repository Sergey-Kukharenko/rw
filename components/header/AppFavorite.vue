<template>
  <a :class="classNames">
    <div class="favorite__figure">
      <SvgSprite symbol="heart" class="favorite__icon"/>
      <app-counter v-if="isCount" :count="count" class="favorite__counter"/>
    </div>
    <div class="favorite__figcaption">Favorite</div>
  </a>
</template>

<script setup>
import AppCounter from '@/components/shared/AppCounter.vue';

const count = ref(12);
const isCount = computed(() => count.value > 0);

const classNames = computed(() =>
  useToggleClassName(isCount.value, 'favorite', 'active')
)
</script>

<style lang="scss" scoped>
.favorite {
  color: $color-light-grey;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }

  @include lt-md {
    display: none;
  }

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 28px;
    height: 28px;
    margin: 0 auto;
  }

  &__icon {
    width: 20px;
    height: 18.5px;
    fill: currentColor;
  }

  &__figcaption {
    font-family: $golos-medium;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: $color-dark-grey;
    margin-top: 7px;
  }

  &__counter {
    background: currentColor;
  }

  &--active {
    color: $color-favorite;

    &:hover {
      .favorite__figcaption{
        color: inherit;
      }
    }
  }
}
</style>
