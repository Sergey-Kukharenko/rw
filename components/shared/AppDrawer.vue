<template>
  <div class="drawer">
    <div class="drawer__header">
      <div class="drawer__button" @click="toggle">
        <div :class="classNames">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="drawer__content"/>
    </div>
    <div class="drawer__overlay" v-show="visibility" @click="close" />
    <div class="drawer__container" v-show="visibility">
      <div class="drawer__inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const visibility = ref(false)
const open = () => (visibility.value = true)
const close = () => (visibility.value = false)
const toggle = () => (visibility.value = !visibility.value)
const classNames = computed(() =>
  useToggleClassName(visibility.value, 'burger', 'active')
)
</script>


<style lang="scss" scoped>
.drawer {
  &__header {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 18px;
    box-sizing: border-box;
  }

  &__content {
    flex: 1;
  }

  &__button {
    @include xs {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__overlay {
    @include xs {
      width: 100vw;
      height: 100vh;
      position: absolute;
      background: rgba(0, 0, 0, 0.7);
      z-index: 3;
    }
  }

  &__container {
    @include xs {
      width: 100%;
      height: 0;
      position: absolute;
      z-index: 4;
    }
  }

  &__inner {
    @include xs {
      width: 223px;
      height: 100vh;
      background: #fff;
      padding: 12px;
      box-sizing: border-box;
    }
  }
}

.burger {
  @include xs {
    position: relative;
    width: 16px;
    height: 12px;
    margin: 20px auto;
    cursor: pointer;
  }

  & span {
    @include xs {
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      background-color: black;
      transition: all 0.3s ease;

      &:first-child {
        top: 0;
      }

      &:nth-child(2) {
        top: 0;
        bottom: 0;
        margin: auto;
      }

      &:last-child {
        bottom: 0;
      }
    }
  }

  &--active {
    & span {
      &:first-child {
        transform: rotate(45deg);
      }

      &:last-child {
        transform: rotate(-45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:first-child,
      &:last-child {
        top: 6px;
      }
    }
  }
}
</style>
