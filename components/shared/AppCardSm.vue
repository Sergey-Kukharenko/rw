<template>
  <div class="card">
    <div class="card__figure">
      <img :src="props.slide.img" :alt="props.slide.img" class="card__img"/>
    </div>

    <div class="card__title">{{ props.slide.title }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  slide: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style lang="scss" scoped>
.card {
  &__figure {
    overflow: hidden;

    @include gt-sm {
      height: 144px;
      border-radius: 16px;
    }

    @include lt-md {
      height: 92px;
      border-radius: 12px;
    }
  }

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    font-family: $golos-medium;

    color: $color-dark-grey;
    text-align: center;

    @include gt-sm {
      font-size: 16px;
      line-height: 20px;
      margin-top: 16px;
    }

    @include lt-md {
      font-size: 12px;
      line-height: 16px;
      margin-top: 8px;
    }
  }
}
</style>
