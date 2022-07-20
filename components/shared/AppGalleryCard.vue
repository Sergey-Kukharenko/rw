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
  overflow: hidden;

  @include gt-xs {
    max-width: 528px;
    height: 528px;
    border-radius: 12px;
  }

  @include xs {
    padding-top: 100%;
  }

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @include xs {
      position: absolute;
      top: 0;
    }
  }
}

</style>
