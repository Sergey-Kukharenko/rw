<template>
  <div v-if="loading">
    <template v-if="isDesktop">
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

    <teleport v-else to=".drawer__content">
      <a class="cart">
        <SvgSprite
          symbol="cart-outline"
          class="cart__icon"
        />
      </a>
    </teleport>
  </div>
</template>

<script setup>
import { useMq } from 'vue3-mq'

const mq = useMq()
const isDesktop = computed(() => mq.current !== 'xs')

const loading = ref(false)
onMounted(() => (loading.value = true))
</script>

<style lang="scss" scoped>
.cart {
  cursor: pointer;

  @include xs {
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
    @include gt-xs {
      fill: $color-light-grey;
    }
    @include xs {
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
