<template>
  <div class="stars">
    <SvgSprite
      v-for="star in stars"
      :key="star"
      symbol="star"
      class="stars__icon"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  stars: {
    type: Number,
    default: 1,
  },
})
</script>

<style lang="scss" scoped>
.stars {
  display: flex;
  &__icon {
    width: 15.22px;
    height: 14.47px;

    &:not(:first-child) {
      margin-left: 2.78px;
    }
  }
}
</style>