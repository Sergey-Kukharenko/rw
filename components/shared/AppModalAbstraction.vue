<template>
  <Teleport to="body">
    <div class="modal">
      <div class="modal__overlay" @click="close"></div>
      <div class="modal__content">
        <slot />
        <button type="button" class="button" @click="close">
          <SvgSprite symbol="close" class="button__icon" />
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const emit = defineEmits(['close'])
const close = () => emit('close')
const handleKeyup = (event) => {
  if (event.keyCode !== 27) {
    return
  }

  close()
}

useEventListener(window, 'keyup', handleKeyup)
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
  z-index: 6;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
    cursor: pointer;
  }

  &__content {
    position: relative;
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.3rem;
    z-index: 2;

    @include gt-xs {
      width: 500px;
      margin: 2rem auto;
    }

    @include xs {
      margin: 6px;
    }
  }
}

.button {
  position: absolute;
  right: 0;
  top: 0;
  color: #8b8b8b;
  padding: 16px;

  &:hover {
    color: darken(#8b8b8b, 20%);
  }

  &__icon {
    width: 18px;
    height: 18px;
    color: inherit;
    fill: currentColor;
  }
}
</style>
