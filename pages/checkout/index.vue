<template>
  <div class="layout layout-dt checkout-page">
    <div class="checkout-page__main">
      <div class="section">
        <div class="section__title">Recipient</div>
        <div class="section__container">
          <app-radio-group v-model:selected="selected" :options="recipients" />
          <div class="form" v-show="isVisible">
            <div class="form__item">
              <input
                type="text"
                name="name"
                placeholder="Recipient name"
                class="input"
              />
            </div>
            <div class="form__item">
              <input
                type="tel"
                name="tel"
                placeholder="And phone number"
                class="input"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section__title">Delivery details</div>
        <div class="section__subtitle">
          Specify in more detail how to get the courier to you
        </div>

        <div class="delivery">
          <div class="delivery__item">
            <input
              type="text"
              name="address"
              placeholder="Choose delivery address"
              class="input"
            />
            <app-saved-addresses
              v-model:selected="selectedAddress"
              :list="savedAddresses"
            />
            {{ selectedAddress }}
          </div>

          <div class="delivery__item" style="display: none">
            <app-textarea
              v-model:value="textareaValue"
              placeholder="Comment for the courier"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppRadioGroup from '@/components/shared/AppRadioGroup.vue'
import AppSavedAddresses from '@/components/shared/AppSavedAddresses.vue'
import AppTextarea from '@/components/ui/AppTextarea.vue'

const recipients = ref(['I’ll get order by mySelf', 'Another recipient'])
const selected = ref(recipients.value[0])
const another = recipients.value[1]

const isVisible = computed(() => another === selected.value)
const textareaValue = ref('')

const savedAddresses = ref([
  'Home • 15 Westferry Road, London, E14 8FQ, Apartment 813',
  'Selfridges & Co 400 Oxford Street London W1A 1AB, Apartment 96'
])

const selectedAddress = ref(savedAddresses.value[0])
</script>

<style lang="scss" scoped>
.checkout-page {
  display: flex;

  &__main {
    width: 712px;
    height: 4000px;
  }
}

.section {
  padding: 40px 0;
  border-bottom: 1px solid #dde0e6;

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
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    margin-top: 7px;
  }

  &__container {
    margin-top: 26px;
  }
}

.form {
  display: flex;
  margin: 5px -12px -12px;

  &__item {
    width: 50%;
    margin: 12px;
  }
}

.input {
  width: 100%;
  font-family: $golos-regular;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  background: $bg-grey;
  padding: 14px 16px;
  outline: none;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }
}

.delivery {
  margin: 16px 0;

  &__item {
    margin: 8px 0;
  }
}
</style>
