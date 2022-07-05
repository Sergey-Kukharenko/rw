<template>
  <transition>
    <div class="modal" v-show="props.open">
      <div class="modal__overlay" @click="close"></div>
      <div class="modal__content">
        <slot />
        <button type="button" @click="close">Close</button>
      </div>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])

const close = () => emit('close')

const handleKeyup = (event) => {
  if (event.keyCode === 27) close()
}

onMounted(() => document.addEventListener('keyup', handleKeyup))
onUnmounted(() => document.removeEventListener('keyup', handleKeyup))
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 4;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  &__content {
    width: 500px;
    position: relative;
    background-color: #fff;
    padding: 1rem;
    margin: 2rem auto;
    border-radius: 0.3rem;
    z-index: 2;
  }
}
</style>
