<template>
  <div class="dropdown" v-click-outside="close">
    <div class="dropdown__header" @click="open">
      <slot name="button"> </slot>
    </div>

    <div class="dropdown__container" v-show="visibility">
      <slot name="dropdown"> </slot>
    </div>
  </div>
</template>

<script setup>
const visibility = ref(false)
const open = () => (visibility.value = true)
const close = () => (visibility.value = false)
</script>


<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: block;
  z-index: 2;

  &__header {
  }

  &__container {
    position: absolute;
    width: 100%;
    background: #fff;
    padding: 0.5rem;
    margin-top: 10px;
    border-radius: 0.5rem;
    box-sizing: border-box;
    box-shadow: 0 0 10px 1px #d5d5d5;
  }
}
</style>
