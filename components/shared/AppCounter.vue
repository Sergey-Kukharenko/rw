<template>
  <div class="counter">
    <div class="counter__number">{{props.count}}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  count: {
    type: Number,
    required: true
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
  top: -3px;
  right: -1px;
  width: 20px;
  height: 20px;
  border: 2px solid #fff;
  border-radius: 50%;
  box-sizing: border-box;

  &__number {
    font-family: $golos-medium;
    font-size: 9px;
    line-height: 12px;
    color: #ffffff;
  }
}
</style>
