<template>
  <div class="payment">
    <div class="payment__item" v-for="item in payment" :key="item">
      <SvgSprite :symbol="item.name" :class="item.name" />
    </div>
  </div>
</template>

<script setup>
import dataPayment from '@/data/payment'

const payment = ref(dataPayment)
</script>

<style lang="scss" scoped>
.payment {
  display: flex;
  align-items: center;

  &__item {
    background: white;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:last-child) {
      @include gt-xs {
        margin-right: 16px;
      }

      @include xs {
        margin-right: 8px;
      }
    }

    @include gt-xs {
      width: 74px;
      height: 48px;
    }

    @include xs {
      width: 51px;
      height: 33px;
    }
  }
}

.visa {
  @include gt-xs {
    width: 50.74px;
    height: 32px;
  }

  @include xs {
    width: 34.97px;
    height: 22px;
  }
}

.mastercard {
  @include gt-xs {
    width: 47.57px;
    height: 27.61px;
  }

  @include xs {
    width: 32.79px;
    height: 18.98px;
  }
}

.paypal {
  @include gt-xs {
    width: 22.18px;
    height: 24.76px;
  }

  @include xs {
    width: 15.58px;
    height: 17.02px;
  }
}

.googlepay {
  @include gt-xs {
    width: 52.86px;
    height: 20.59px;
  }

  @include xs {
    width: 36.43px;
    height: 14.15px;
  }
}

.applepay {
  @include gt-xs {
    width: 53px;
    height: 20.59px;
  }

  @include xs {
    width: 36.52px;
    height: 14.32px;
  }
}
</style>
