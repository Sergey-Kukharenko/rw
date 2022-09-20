<template>
  <button class="button search" @click="isVisible = true">
    <SvgSprite symbol="search" class="button__icon" />
    <span class="button__text">Search in Florа</span>
  </button>

  <app-modal :visible="isVisible" @close="isVisible = false" theme="full">
    <app-search/>
  </app-modal>
</template>

<script setup>
import AppModal from '@/components/shared/AppModal.vue'
import AppSearch from '@/components/header/search/AppSearch.vue'

const isVisible = ref(false)

const options = {
  width: '100%',
  top: 0,
  margin: 0,
  border: 'none',
  background: 'none'
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  color: $color-dark-grey;

  @include gt-sm {
    padding: 10px 0;
  }

  @include lt-md {
    align-items: center;
    justify-content: center;
    padding: 8px;
  }

  &:hover {
    color: lighten($color-dark-grey, 20%);
  }

  &__icon {
    @include gt-sm {
      width: 18px;
      height: 18px;
      color: inherit;
      fill: currentColor;
    }

    @include lt-md {
      width: 20px;
      height: 20px;
      fill: $color-dark-grey;
    }
  }

  &__text {
    font-family: $golos-medium;
    font-size: 14px;
    margin-left: 4px;

    @include lt-md{
      display: none;
    }
  }
}
</style>
