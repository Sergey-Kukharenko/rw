<template>
  <div class="section-header">
    <h2 class="section-header__title title">
      <span class="title__text">{{ props.headerProps.title }}</span>
      <span class="title__number">{{ props.headerProps.count }}</span>
    </h2>
    <a class="section-header__link" v-if="props.headerProps.link">{{ props.headerProps.link.text }}</a>
  </div>
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
.section-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-family: $Literata;
  font-weight: 700;

  &__link {
    @include gt-sm {
      font-size: 18px;
      line-height: 20px;
      color: $color-green;
    }

    @include lt-md {
      display: none;
    }
  }
}

.title {
  display: flex;
  align-items: center;

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
