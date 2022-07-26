<template>
  <div class="counter">
    <button class="counter__btn btn">
      <span class="absolute-grow btn__icon btn__icon--minus"></span>
    </button>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;

  &__btn {
    background: #ccc;
  }
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: $color-dark-grey;

  &__icon {
    background: $bg-grey;

    &--minus {
      width: 12px;
      height: 2px;
    }

    &--plus {
      width: 2px;
      height: 12px;
    }
  }
}
</style>
