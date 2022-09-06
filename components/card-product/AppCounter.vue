<template>
  <div class="counter">
    <button class="counter__btn btn" @click="decrement()">
      <span class="absolute-grow btn__icon btn__icon--minus"></span>
    </button>
    <input v-model="count" type="number" class="counter__input" />
    <button class="counter__btn btn" @click="increment()">
      <span class="absolute-grow btn__icon btn__icon--minus"></span>
      <span class="absolute-grow btn__icon btn__icon--plus"></span>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  count: {
    type: Number
  }
})

const emit = defineEmits(['update:count'])

const count = ref(props.count)
const increment = () => count.value++
const decrement = () => count.value--

watchEffect(() => {
  emit('update:count', count.value)
})
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  justify-content: center;
  height: 36px;

  &__btn {
    flex-shrink: 0;
    width: 36px;
  }

  &__input {
    width: 80px;
    font-family: $golos-regular;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: $color-dark-grey;
    padding: 4px;
    margin: 0 4px;
    text-align: center;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    box-sizing: border-box;
  }
}

.btn {
  position: relative;
  background: $bg-grey;
  border-radius: 10px;
  transition: box-shadow 0.2s ease-out 0s;

  &:hover {
    box-shadow: 0 0 3px 1px #e3e3e3;
  }

  &:active {
    box-shadow: 0 0 0 0 #e3e3e3;
  }

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
