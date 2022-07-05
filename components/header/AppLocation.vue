<template>
  <div class="location">
    <div class="location-button" @click="isOpen = true">
      <div class="location-button__icon icon">
        <SvgSprite symbol="location" class="icon__location"/>
      </div>
      <div class="location__description description">
        <div class="description__text">{{ location.text }}</div>
        <div class="description__title">{{ location.city }}</div>
      </div>
      <div class="location-button__icon icon">
        <SvgSprite symbol="arrow" class="icon__arrow"/>
      </div>
    </div>

    <app-modal :open="isOpen" @close="isOpen = false">
      <h1>Content</h1>
    </app-modal>
  </div>
</template>

<script setup>
import AppModal from '@/components/shared/AppModal.vue'

const location = ref({
  city: 'London',
  text: 'Flower delivery to',
});

const isOpen = ref(false);
</script>

<style lang="scss" scoped>
.location-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 245px;
  background: #f7f7f7;
  padding: 7px 17px;
  border-radius: 12px;
  box-sizing: border-box;
  cursor: pointer;

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
  }

  &__title {
    font-family: $golos-medium;
    font-size: 14px;
    line-height: 20px;
    color: $color-dark-grey;
    margin: 0 0;
  }
}

.icon {
  &__location {
    width: 13.24px;
    height: 13.24px;
    fill: $color-dark-green;
  }

  &__arrow {
    width: 11px;
    height: 6px;
    fill: $color-dark-grey;
  }
}
</style>
