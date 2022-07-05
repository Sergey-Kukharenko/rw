<template>
  <button class="button" @click="isOpen = true">
    <SvgSprite symbol="search" class="button__icon" />
    <span class="button__text">Search in Florа</span>
  </button>

  <app-modal :open="isOpen" @close="isOpen = false">
    <h1>Search</h1>
  </app-modal>
</template>

<script setup>
import AppModal from '@/components/shared/AppModal.vue'

const isOpen = ref(false)
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  color: $color-dark-grey;
  padding: 10px 0;

  &:hover {
    color: lighten($color-dark-grey, 20%);
  }

  &__icon {
    width: 18px;
    height: 18px;
    color: inherit;
    fill: currentColor;
  }

  &__text {
    font-family: $golos-medium;
    font-size: 14px;
    margin-left: 4px;
  }
}
</style>
