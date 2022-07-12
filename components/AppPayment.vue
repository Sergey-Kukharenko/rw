<template>
  <div class="payment">
    <div v-for="item in payment" :key="item" class="payment__item">
      <SvgSprite
        :symbol="item.name"
        v-bind="item[getMq].style"
        :class="item.name"
      />
    </div>
  </div>
</template>

<script setup>
import { useMq } from 'vue3-mq'
import dataPayment from '@/data/payment'

const payment = ref(dataPayment)

const mq = useMq()
const getMq = computed(() => (mq.current === 'xs' ? 'mobile' : 'desktop'))
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
</style>
