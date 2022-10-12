<template>
  <div class="grid">
    <div v-for="(slide, idx) in props.slides" :key="idx" class="grid__item">
      <slot v-bind="{ ...slide }"></slot>
    </div>

    <div class="grid__item">
      <app-card-show-more/>
    </div>

  </div>
</template>

<script setup>
import AppCardShowMore from './AppCardShowMore';

const props = defineProps({
  slides: {
    type: Array,
    default: () => []
  }
});
</script>

<style lang="scss" scoped>
.grid {
  display: grid;

  @include gt-sm {
    grid-template-columns: repeat(auto-fill, minmax(22%, 1fr));
    grid-gap: 16px;
    row-gap: 40px;
  }

  @include lt-md {
    grid-template-columns: repeat(auto-fill, minmax(48%, 1fr));
    grid-gap: 8px;
    row-gap: 8px;
  }

  &__item {
    @include lt-md {
      &:nth-last-child(2) {
        display: none;
      }

      &:last-child {
        grid-column: span 2;
        margin-top: 8px;
      }
    }
  }
}
</style>
