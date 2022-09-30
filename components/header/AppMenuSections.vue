<template>
  <div class="sections">
    <div v-for="(item, idx) in props.section" :key="idx" class="sections__item">
      <slot v-bind="{ ...item }"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  section: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
.sections {
  display: flex;
  outline: 1px solid;
  margin: 0 -16px;

  &__item {
    position: relative;
  }
}
</style>
