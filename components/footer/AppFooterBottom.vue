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

  @include gt-xs {
    padding: 24px 0;
  }

  @include xs {
    padding: 28px 0;
  }

  &__content {
    @include gt-xs {
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
  color: #7c7c7c;

  @include gt-xs {
    text-align: right;
  }

  @include xs {
    margin-top: 32px;
  }
}
</style>