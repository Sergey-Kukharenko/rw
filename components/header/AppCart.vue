<template>
  <a :class="classNames">
    <div class="cart__figure">
      <SvgSprite :symbol="getImg" class="cart__icon" />
      <app-counter v-if="isCount" :count="count" class="cart__counter" />
    </div>
    <div class="cart__figcaption">{{ isPrice }}</div>
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

const cart = {
  price: '£ 52,76',
  count: 1
}

const { count, price } = cart
const isCount = computed(() => count > 0)
const isPrice = computed(() => (price ? price : 'Basket'))

const isMobile = useIsMobile()
const getImg = isMobile.value ? 'cart-bag' : 'cart-outline'

const classNames = computed(() => [
  useClassName(props, 'cart'),
  useSetClassName(isCount.value, 'cart--active')
])
</script>

<style lang="scss" scoped>
.cart {
  cursor: pointer;
  @include gt-sm {
    color: $color-light-grey;
  }

  @include lt-md {
    display: flex;
    align-items: center;
    justify-content: center;
    order: 4;
    padding: 6px;
    color: black;
    margin-right: -6px;
  }

  &:hover {
    opacity: 0.9;
  }

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
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
      fill: currentColor;
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

    &.cart--active {
      .cart__icon,
      .cart__figcaption {
        @include gt-sm {
          color: $color-white-grey;
        }
      }

      &:hover {
        .cart__icon,
        .cart__figcaption {
          @include gt-sm {
            color: $color-green;
          }
        }
      }

      .cart__figcaption {
        @include gt-sm {
          margin: 0 0 0 20px;
        }
      }
    }

    .cart__icon {
      @include gt-sm {
        width: 16px;
        height: 16px;
      }
    }

    .cart__counter {
      width: 16px;
      height: 16px;
      font-size: 8px;
    }
  }

  &--active {
    color: $color-green;
  }
}
</style>
