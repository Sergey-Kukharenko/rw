<template>
  <div class="layout layout-dt checkout-page">
    <div class="checkout-page__main">
      <div class="checkout-page__section section">
        <div class="section__title">Recipient</div>
        <div class="section__subtitle">
          Specify in more detail how to get the courier to you
        </div>
        <div class="section__container">
          <app-radio-button v-model:selected="selected" :options="recipients" />

          <h2>{{ visibility }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppRadioButton from '@/components/shared/AppRadioButton.vue'

const recipients = ref(['I’ll get order by mySelf', 'Another recipient'])
const selected = ref(recipients.value[0])
const another = recipients.value[1]

const visibility = computed(() => another === selected.value)
</script>

<style lang="scss" scoped>
.checkout-page {
  display: flex;

  &__main {
    width: 712px;
    height: 4000px;
    outline: 1px solid;
  }

  &__section {
    margin: 10px 0;
  }
}

.section {
  &__title {
    font-family: $Literata;
    font-weight: 700;

    @include gt-sm {
      font-size: 24px;
      line-height: 28px;
    }

    @include lt-sm {
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__subtitle {
    font-family: $golos-regular;
    letter-spacing: -0.01em;
    font-size: 14px;
    line-height: 20px;
  }

  &__container {
    margin: 0;
  }
}
</style>
