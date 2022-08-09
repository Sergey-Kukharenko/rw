<template>
  <div class="notification" :style="props.notification.style">
    <SvgSprite
      v-if="props.notification.icon"
      :symbol="props.notification.icon"
      class="notification__icon"
    />
    <div class="notification__text">{{ props.notification.text }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  notification: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped>
.notification {
  display: flex;
  align-items: flex-start;
  padding: 8px 19.33px;
  margin: 0 -14px;

  @include gt-xs {
  }

  @include xs {
  }

  &__icon {
    display: block;
    width: 9.33px;
    height: 13.33px;
    margin-right: 11.33px;
  }

  &__text {
    max-width: 190px;
    font-family: $golos-regular;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: -0.01em;
  }
}
</style>
