<template>
  <div class="card">
    <img
      :src="props.slide.img"
      :alt="props.slide.img"
      class="card__img"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  slide: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;

  @include gt-xs {
    height: 528px;
  }

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

</style>
