<template>
  <button class="button search" @click="open">
    <SvgSprite symbol="search" class="button__icon" />
    <span class="button__text">Search in Florа</span>
  </button>

  <app-modal
    v-if="!isDevice"
    :visible="isVisible"
    @close="close"
    theme="full"
  >
    <app-search-box />
  </app-modal>
</template>

<script setup>
import { useIsDevice } from '@/composables/states'
import AppModal from '@/components/shared/AppModal.vue'
import AppSearchBox from '~~/components/header/search/AppSearchBox.vue'
import {disableScroll, enableScroll} from '@/helpers/scrollLock';

const isDevice = useIsDevice()
const isVisible = ref(false)

const open = () => {
  isVisible.value = true
  disableScroll()
}

const close = () => {
  isVisible.value = false
  enableScroll()
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

    @include lt-md {
      display: none;
    }
  }
}
</style>
