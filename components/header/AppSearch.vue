<template>
  <div v-if="isLoading">
    <teleport  v-if="isDevice" :to="DRAWER_CONTENT_ID">
      <button class="button" @click="isVisibility = true">
        <SvgSprite symbol="search" class="button__icon" />
      </button>

      <app-modal :open="isVisibility" @close="isVisibility = false">
        <h1>Mobile Search</h1>
      </app-modal>
    </teleport>

    <template v-else>
      <button class="button" @click="isVisibility = true">
        <SvgSprite symbol="search" class="button__icon" />
        <span class="button__text">Search in Florа</span>
      </button>

      <app-modal :open="isVisibility" @close="isVisibility = false">
        <h1>Search</h1>
      </app-modal>
    </template>
  </div>
</template>

<script setup>
import { useMq } from 'vue3-mq'
import AppModal from '@/components/shared/AppModal.vue'
import { DRAWER_CONTENT_ID } from '@/constants'

const isVisibility = ref(false)
const mq = useMq()
const isDevice = computed(() => mq.current === 'xs' || mq.current === 'sm')

const isLoading = ref(false)
onMounted(() => (isLoading.value = true))
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
    order: 2;
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
  }
}
</style>
