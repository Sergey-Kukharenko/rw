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
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.notification {
  @include gt-xs {
    display: none;
  }

  @include xs {
    display: flex;
    align-items: flex-start;
    padding: 7px 19.33px;
    margin: 0 -14px;
    box-sizing: border-box;
  }

  &__icon {
    display: block;
    width: 10px;
    height: 14px;
    margin-right: 11px;
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
