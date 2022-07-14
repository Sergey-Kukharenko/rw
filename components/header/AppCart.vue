<template>
  <div v-if="isLoading">
    <teleport v-if="isDevice" :to="DRAWER_CONTENT_ID">
      <a class="cart">
        <SvgSprite
          symbol="cart-outline"
          class="cart__icon"
        />
      </a>
    </teleport>

    <template v-else>
      <a class="cart">
        <figure class="cart__figure">
          <SvgSprite
            symbol="cart"
            class="cart__icon"
            width="24"
            height="24"
          />
        </figure>
        <figcaption class="cart__figcaption">
          Basket
        </figcaption>
      </a>
    </template>
  </div>
</template>

<script setup>
import { useMq } from 'vue3-mq'
import { DRAWER_CONTENT_ID } from '@/constants'

const mq = useMq()
const isDevice = computed(() => mq.current === 'xs' || mq.current === 'sm')

const isLoading = ref(false)
onMounted(() => (isLoading.value = true))
</script>

<style lang="scss" scoped>
.cart {
  cursor: pointer;

  @include lt-md {
    display: flex;
    align-items: center;
    justify-content: center;
    order: 4;
    padding: 8px;
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
    @include gt-sm {
      fill: $color-light-grey;
    }
    @include lt-md {
      width: 20px;
      height: 20px;
      fill: white;
    }
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
