<template>
  <a :class="classNames">
    <div class="cart__figure">
      <SvgSprite symbol="cart-outline" class="cart__icon" />
    </div>
    <div class="cart__figcaption">Basket</div>

    <app-counter v-if="isCount" :count="count" class="cart__counter" />
  </a>
</template>

<script setup>
import AppCounter from '@/components/shared/AppCounter.vue'

const props = defineProps({
  theme: {
    type: String,
    default: ''
  }
})

const count = ref(2)
const isCount = computed(() => count.value > 0)

const classNames = computed(() => [
  useClassName(props, 'cart'),
  useSetClassName(isCount.value, 'cart--active'),
])
</script>

<style lang="scss" scoped>
.cart {
  position: relative;
  color: $color-light-grey;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }

  &--inline {
    @include gt-sm {
      display: flex;
      align-items: center;
    }

    .cart__figure {
      @include gt-sm {
        width: 16px;
        height: 16px;
      }
    }

    .cart__figcaption {
      @include gt-sm {
        margin: 0 0 0 9px;
      }
    }

    .cart__icon {
      @include gt-sm {
        width: 16px;
        height: 16px;
      }
    }
  }

  @include lt-md {
    display: flex;
    align-items: center;
    justify-content: center;
    order: 4;
    padding: 8px;
    margin-right: -8px;
  }

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 auto;

    @include gt-sm {
      width: 28px;
      height: 28px;
    }
  }

  &__icon {
    @include gt-sm {
      width: 24px;
      height: 24px;
      fill: currentColor;
    }

    @include lt-md {
      width: 20px;
      height: 20px;
      fill: white;
    }
  }

  &__figcaption {
    @include gt-sm {
      font-family: $golos-medium;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: currentColor;
      margin-top: 7px;
    }
    @include lt-md {
      display: none;
    }
  }

  &__counter {
    background: currentColor;
  }

  &--active {
    color: $color-green;
  }
}
</style>
