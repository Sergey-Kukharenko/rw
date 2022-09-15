<template>
  <div v-click-outside="close" class="dropdown">
    <div class="dropdown__header" @click="isVisible = true">
      <slot name="button"> </slot>
    </div>

    <div v-show="isVisible" :style="options" class="dropdown__container">
      <slot name="dropdown"> </slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Object,
    default: () => ({})
  }
})

const isVisible = ref(false)
const close = () => (isVisible.value = false)
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: block;
  z-index: 2;

  &__container {
    position: absolute;
    background: #fff;
    margin-top: 10px;
    border-radius: 0.5rem;
    box-sizing: border-box;
    box-shadow: 0 0 10px 1px #d5d5d5;
  }
}
</style>
