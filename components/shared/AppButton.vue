<template>
  <button :class="classNames">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  theme: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '',
  },
})

const classNames = computed(() => useClassName(props, 'button'))
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  font-family: $golos-regular;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;
  background: $color-green;
  border-radius: 12px;
  padding: 0 12px;
  transition: background-color 0.2s ease 0s;

  @include gt-sm {
    &:hover:not(:disabled) {
      background: darken($color-green, 10%);
      cursor: pointer;
    }
  }

  &:disabled {
    background: #ccc;
    cursor: none;
  }

  &--grey {
    background: #eaeaea;

    @include gt-sm {
      &:hover:not(:disabled) {
        background: darken(#eaeaea, 10%);
        cursor: pointer;
      }
    }
  }

  &--sm {
    @include gt-sm {
      font-size: 14px;
      line-height: 22px;
      padding: 8px 20px;
    }

    @include lt-md {
      display: flex;
      min-width: 32px;
      min-height: 32px;
      padding: 2px;
      border-radius: 8px;
      box-sizing: border-box;
    }

    & ::v-slotted(svg) {
      @include gt-sm {
        display: none;
      }

      @include lt-md {
        display: block;
        margin: auto;
      }
    }

    & ::v-slotted(svg + span) {
      @include gt-sm {
        display: block;
      }

      @include lt-md {
        display: none;
      }
    }
  }

  &--fx {
    width: 244px;
  }
}
</style>
