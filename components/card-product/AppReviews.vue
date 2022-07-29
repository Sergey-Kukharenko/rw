<template>
  <div class="reviews">
    <h2 class="reviews__title">
      {{props.reviews.title}}
    </h2>
  </div>
</template>

<script setup>
const props = defineProps({
  reviews: {
    type: Object,
    default: () => {},
  }
})
</script>

<style lang="scss" scoped>
.reviews {
  margin: 0;

  &__title{
    font-family: $Literata;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
  }
}
</style>
