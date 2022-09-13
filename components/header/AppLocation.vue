<template>
  <div class="location">
    <div class="location-button" @click="isVisible = true">
      <div class="location-button__icon icon">
        <SvgSprite symbol="location" class="icon__location" />
      </div>
      <div class="location__description description">
        <div class="description__text">
          <template v-if="location.address">Flower delivery to</template>
          <template v-else>Free London delivery</template>
        </div>
        <div class="description__title">
          <template v-if="location.address">{{ location.address }}, {{ location.city }}</template>
          <template v-else>Type your address</template>
        </div>
      </div>
      <div class="location-button__icon icon">
        <SvgSprite symbol="pencil" class="icon__pencil" />
      </div>
    </div>

    <app-modal :visible="isVisible" @close="isVisible = false">
      <app-address @setLocation="onSetLocation" />
    </app-modal>
  </div>
</template>

<script setup>
import AppModal from '@/components/shared/AppModal.vue'
import AppAddress from '@/components/header/address/AppAddress.vue'

const location = ref({
  city: 'London',
  address: ''
});

const isVisible = ref(false)

const onSetLocation = (payload) => {
  location.value = payload
  isVisible.value = false
}
</script>

<style lang="scss" scoped>
.location-button {
  @include gt-sm {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 245px;
    background: $bg-grey;
    padding: 7px 17px;
    border-radius: 12px;
    box-sizing: border-box;
    cursor: pointer;
    transition: background 0.25s ease 0s;

    &:hover {
      background: #e4f8ea;

      & .description__title {
        color: $color-dark-green;
      }
    }
  }

  @include lt-md {
    display: none;
  }

  &__icon {
    flex-shrink: 0;
  }

  &__description {
    flex: 1;
  }
}

.description {
  margin: 0 auto 0 14px;

  &__text {
    font-family: $golos-regular;
    font-size: 11px;
    line-height: 14px;
    color: $color-white-grey;
  }

  &__title {
    font-family: $golos-medium;
    font-size: 14px;
    line-height: 20px;
    color: $color-dark-grey;
    margin: 0 0;
    transition: color 0.25s ease 0s;
  }
}

.icon {
  &__location {
    width: 13.24px;
    height: 13.24px;
    fill: $color-dark-green;
  }

  &__pencil {
    width: 16px;
    height: 16px;
    fill: $color-dark-grey;
  }
}
</style>
