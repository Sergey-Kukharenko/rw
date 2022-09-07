<template>
  <div :class="classNames">
    <div class="counter__number">
      <slot/>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  theme: {
    type: String,
    default: ''
  }
})

const classNames = computed(() => useClassName(props, 'counter'))
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  background: $color-dark-green;
  border: 2px solid #fff;
  border-radius: 50%;
  box-sizing: border-box;

  &--pink {
    background: #F63866;
  }

  &__number {
    font-family: $golos-medium;
    font-style: normal;
    font-size: 9px;
    line-height: 12px;
    letter-spacing: -0.01em;
    color: #ffffff;
  }
}
</style>
