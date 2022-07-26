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
  width: 36px;
  height: 36px;

  &__btn {
    width: 36px;
    height: 36px;
  }
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: $bg-grey;
  border-radius: 10px;

  &__icon {
    background: $color-dark-grey;
    margin: auto;

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
