<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  theme: {
    type: String,
    default: ''
  }
})

const classNames = computed(() => {
  const themeSelector = useClassName(props, 'badge')
  return ['badge', themeSelector]
})
</script>

<style lang="scss" scoped>
.badge {
  font-family: $golos-regular;
  letter-spacing: -0.01em;
  color: #ffffff;
  padding: 2px 6px;
  background: #343434;
  border-radius: 8px;

  @include gt-xs {
    font-size: 11px;
    line-height: 16px;
  }

  @include xs {
    font-size: 8px;
    line-height: 10px;
    padding: 2px 4.4555px;
  }

  &--red {
    background: #db1838;
  }
}
</style>
