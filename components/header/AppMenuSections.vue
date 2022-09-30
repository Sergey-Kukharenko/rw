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
  margin: 0 -16px;

  &__item {
    position: relative;

    &:not(:first-child) {
      &::before {
        content: '';
        display: block;
        width: 1px;
        height: calc(100% - 86px);
        background: #eaeaea;
        position: absolute;
        top: 40px;
        left: 0;
        bottom: 0;
        margin: auto;
      }
    }
  }
}
</style>
