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
  font-family: $Literata;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;

  @include gt-sm {
    font-size: 28px;
    line-height: 32px;
    margin: 0 0 32px 0;
  }

  @include lt-md {
    font-size: 20px;
    line-height: 24px;
    margin: 0 0 16px 0;
  }

  &__text {
    color: #000;
  }

  &__number {
    color: $color-grey;
    margin-left: 8px;
  }
}
</style>
