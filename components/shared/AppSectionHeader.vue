<template>
  <h2 class="title">
    <span class="title__text">{{ props.headerProps.title }}</span>
    <span v-if="props.headerProps.count" class="title__number">{{ props.headerProps.count }}</span>
  </h2>
</template>

<script setup>
const props = defineProps({
  headerProps: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped lang="scss">
.title {
  display: flex;
  align-items: center;

  &__text {
    color: #000;
  }

  &__number {
    color: $color-grey;
    margin-left: 8px;
  }
}
</style>
