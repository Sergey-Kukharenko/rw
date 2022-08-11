<template>
  <a class="call">
    <SvgSprite symbol="call-outline" class="phone__icon" />
  </a>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.phone {
  @include lt-md {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__icon {
    @include lt-md {
      width: 20px;
      height: 20px;
      fill: $color-dark-grey;
      padding: 8px;
    }
  }
}
</style>