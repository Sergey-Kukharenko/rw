<template>
  <div class="section-header">
    <h1 class="section-header__title title">
      <span class="title__text">{{ headerProps.title }}</span>
      <span class="title__number">{{ headerProps.count }}</span>
    </h1>
    <a class="section-header__link">{{ headerProps.link.text }}</a>
  </div>
</template>

<script setup>
const props = defineProps({
  headerProps: Object,
});
</script>

<style scoped lang="scss">
.section-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  &__link {
    font-family: $golos-bold;
    letter-spacing: -0.01em;
    color: $color-green;
  }
}

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
