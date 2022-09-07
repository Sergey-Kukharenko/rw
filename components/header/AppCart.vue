<template>
  <a :class="classNames">
    <figure class="cart__figure">
      <SvgSprite symbol="cart-outline" class="cart__icon" />
    </figure>
    <app-counter theme="green" v-if="isCount">{{ count }}</app-counter>
    <figcaption class="cart__figcaption">Basket</figcaption>
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

const classNames = computed(() => useClassName(props, 'cart'))

const count = ref(1)
const isCount = computed(() => count.value > 0)
</script>

<style lang="scss" scoped>
.cart {
  position: relative;
  cursor: pointer;

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
      fill: $color-dark-grey;
      opacity: 0.5;
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
      color: $color-white-grey;
      margin-top: 7px;
    }
    @include lt-md {
      display: none;
    }
  }

  &:hover {
    @include gt-sm {
      opacity: 0.75;
    }
  }
}
</style>
