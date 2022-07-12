<template>
  <template v-if="loading">
    <template v-if="isDesktop">
      <button class="button" @click="isOpen = true">
        <SvgSprite symbol="search" class="button__icon" />
        <span class="button__text">Search in Florа</span>
      </button>

      <app-modal :open="isOpen" @close="isOpen = false">
        <h1>Search</h1>
      </app-modal>
    </template>

    <teleport v-else to=".drawer__content">
      <button class="button" @click="isOpen = true">
        <SvgSprite symbol="search" class="button__icon" />
      </button>

      <app-modal :open="isOpen" @close="isOpen = false">
        <h1>Mobile Search</h1>
      </app-modal>
    </teleport>
  </template>
</template>

<script setup>
import { useMq } from 'vue3-mq'
import AppModal from '@/components/shared/AppModal.vue'

const isOpen = ref(false)

const mq = useMq()
const isDesktop = computed(() => mq.current !== 'xs')

const loading = ref(false)
onMounted(() => (loading.value = true))
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  color: $color-dark-grey;

  @include gt-xs {
    padding: 10px 0;
  }

  @include xs {
    align-items: center;
    justify-content: center;
    order: 2;
    padding: 8px;
  }

  &:hover {
    color: lighten($color-dark-grey, 20%);
  }

  &__icon {
    @include gt-xs {
      width: 18px;
      height: 18px;
      color: inherit;
      fill: currentColor;
    }

    @include xs {
      width: 20px;
      height: 20px;
      fill: #1F2226;
    }
  }

  &__text {
    font-family: $golos-medium;
    font-size: 14px;
    margin-left: 4px;
  }
}
</style>
