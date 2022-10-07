<template>
  <Teleport to="body">
    <div :class="classNames">
      <div class="modal__overlay" @click="close" />
      <div class="modal__content">
        <div class="modal__layout">
          <slot />
          <button type="button" class="button" @click="close">
            <SvgSprite symbol="close" class="button__icon" />
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  theme: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close'])
const close = () => emit('close')
const handleKeyup = (event) => {
  if (event.keyCode !== 27) {
    return
  }

  close()
}

useEventListener(window, 'keyup', handleKeyup)

const classNames = computed(() => useClassName(props, 'modal'))
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

  &--full {
    & .modal__content {
      width: auto;
      margin: 0;
      border-radius: 0 0 24px 24px;
      box-shadow: 0 4px 8px rgb(0 0 0 / 4%);
    }

    .modal__layout {
      max-width: 1080px;
      margin: 0 auto;
      position: relative;
    }

    & .button {
      padding: 12px;
      background: $bg-grey;
      top: 24px;
      right: 0;

      &:hover {
        background: darken($bg-grey, 10%);
      }

      &__icon {
        width: 24px;
        height: 24px;
        color: $color-dark-grey;
        fill: currentColor;
      }
    }
  }
}

.button {
  position: absolute;
  top: 0;
  right: -62px;
  color: #8b8b8b;
  padding: 14px;
  background: rgb(0 0 0 / 50%);
  border-radius: 50%;

  &:hover {
    color: darken(#8b8b8b, 20%);
  }

  &__icon {
    height: 28px;
    width: 28px;
    color: #fff;
    fill: currentColor;
  }
}
</style>
