<template>
  <div class="layout layout-dt checkout-page">
    <div class="checkout-page__main">
      <div class="checkout-page__section section">
        <div class="section__title">Recipient</div>
        <div class="section__subtitle">
          Specify in more detail how to get the courier to you
        </div>
        <div class="section__container">


          <app-radio-button v-model:selected="selected" :options="decisions"/>

          <h2>{{selected}}</h2>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppRadioButton from '@/components/shared/AppRadioButton.vue'

const radio = ref([
  {
    id: 0,
    label: 'I’ll get order by myself'
  },
  {
    id: 1,
    label: 'Another recipient'
  }
])

const decisions = ref(["Yes", "No", "Undecided"])

const selected = ref('Yes')

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
