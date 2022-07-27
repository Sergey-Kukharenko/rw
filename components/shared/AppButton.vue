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
  color: #ffffff;
  background: $color-green;
  border-radius: 12px;
  padding: 0 12px;
  transition: background-color 0.2s ease 0s;

  &:hover:not(:disabled) {
    background: darken($color-green, 10%);
    cursor: pointer;
  }

  &:disabled {
    background: #ccc;
    cursor: none;
  }

  @include gt-xs {
    font-size: 15px;
    line-height: 24px;
  }

  @include xs {
    font-size: 14px;
    line-height: 22px;
  }

  & ::v-slotted(:not(:first-child)) {
    margin-left: 4px;
  }

  &--grey {
    background: #eaeaea;

    &:hover:not(:disabled) {
      background: darken(#eaeaea, 10%);
      cursor: pointer;
    }
  }

  &--sm {
    @include gt-xs {
      font-size: 14px;
      line-height: 22px;
      padding: 8px 20px;
    }

    @include xs {
      display: flex;
      width: 32px;
      height: 32px;
      padding: 2px;
      border-radius: 8px;
      box-sizing: border-box;
    }

    & ::v-slotted(svg) {
      @include gt-xs {
        display: none;
      }

      @include xs {
        display: block;
        margin: auto;
      }
    }

    & ::v-slotted(svg + span) {
      @include gt-xs {
        display: block;
      }

      @include xs {
        display: none;
      }
    }
  }

  &--fx {
    width: 244px;
  }
}
</style>
