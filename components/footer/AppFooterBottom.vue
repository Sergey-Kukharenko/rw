<template>
  <div class="footer-bottom">
    <div class="layout layout--horizontal-dt">
      <div class="footer-bottom__content">
        <app-payment />
        <div class="text">
          © 2022 Flor2u - flowers delivery in United Kingdom
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppPayment from '@/components/AppPayment.vue'
</script>

<style lang="scss" scoped>
.footer-bottom {
  border-top: 1px solid #e5e5e5;

  @include gt-sm {
    padding: 24px 0;
  }

  @include lt-md {
    padding: 28px 0;
  }

  &__content {
    @include gt-sm {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}

.text {
  font-family: $golos-regular;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: $color-white-grey;

  @include gt-sm {
    text-align: right;
    margin-left: 10px;
  }

  @include lt-md {
    margin-top: 32px;
  }
}
</style>
