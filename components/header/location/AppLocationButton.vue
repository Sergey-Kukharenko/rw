<template>
  <div class="location-button">
    <div class="location-button__icon icon">
      <SvgSprite symbol="location" class="icon__location" />
    </div>
    <div class="location__description description">
      <div class="description__text">
        {{ getDescription }}
      </div>
      <div class="description__title">
        {{ getTitle }}
      </div>
    </div>
    <div class="location-button__icon icon">
      <SvgSprite symbol="pencil" class="icon__pencil" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  location: {
    type: Object,
    default: () => ({})
  }
})

const getTitle = computed(() =>
  props.location.city ? `${props.location.city}` : 'Type your address'
)

const getDescription = computed(() =>
  props.location.address ? 'Flower delivery to' : 'Free London delivery'
)
</script>

<style lang="scss" scoped>
.location-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $bg-grey;
  border-radius: 12px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.25s ease 0s;

  @include gt-sm {
    width: 245px;
    padding: 7px 17px;
  }

  @include lt-md {
    padding: 12px;
    margin: 16px 0 8px;
  }

  &:hover {
    background-color: #e4f8ea;

    & .description__title {
      color: $color-dark-green;
    }
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
    @include gt-sm {
      font-family: $golos-regular;
      font-size: 11px;
      line-height: 14px;
      color: $color-white-grey;
    }

    @include lt-md {
      display: none;
    }
  }

  &__title {
    font-family: $golos-medium;

    color: $color-dark-grey;
    margin: 0;
    transition: color 0.25s ease 0s;

    @include gt-sm {
      font-size: 14px;
      line-height: 20px;
    }

    @include lt-md {
      font-size: 12px;
      line-height: 16px;
    }
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
