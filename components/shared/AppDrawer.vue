<template>
  <div :class="classNames">
    <div class="drawer__header">
      <div class="drawer__button" @click="isVisibility = true">
        <div class="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="drawer__content">
        <app-logo />
        <app-search />
        <app-cart />
        <a class="phone">
          <SvgSprite
            symbol="call-outline"
            class="phone__icon phone__icon--call"
          />
        </a>
      </div>
    </div>
    <div class="drawer__overlay" @click="isVisibility = false" />
    <div class="drawer__container">
      <div class="drawer__inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppLogo from '@/components/header/AppLogo.vue'
import AppSearch from '@/components/header/AppSearch.vue'
import AppCart from '@/components/header/AppCart.vue'

const isVisibility = ref(false)
const classNames = computed(() =>
  useToggleClassName(isVisibility.value, 'drawer', 'active')
)
</script>

<script>

</script>

<style lang="scss" scoped>
.drawer {
  &__header {
    @include lt-md {
      display: flex;
      align-items: center;
      height: 50px;
      padding: 0 18px;
      box-sizing: border-box;
    }
  }

  &__content {
    @include gt-sm{
      display: none;
    }
    @include lt-md {
      flex: 1;
      display: flex;
      align-items: center;
      margin: 0 -8px 0 0;
    }
  }

  &__button {
    @include lt-md {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__overlay {
    @include lt-md {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      background: rgba(0, 0, 0, 0.7);
      z-index: 3;
      opacity: 0;
      transform: translateX(-101%);
      transition: opacity 0.25s ease 0s, transform 0s ease 0.25s;
    }
  }

  &__container {
    @include lt-md {
      width: 100%;
      height: 0;
      position: absolute;
      top: 0;
      z-index: 4;
      transform: translateX(-101%);
      transition: transform 0.25s ease 0s;
    }
  }

  &__inner {
    @include lt-md {
      display: flex;
      flex-direction: column;
      width: 223px;
      height: 100vh;
      background: #fff;
      padding: 12px;
      box-sizing: border-box;
    }
  }
}

.burger {
  @include lt-md {
    position: relative;
    width: 16px;
    height: 12px;
    margin: 20px auto;
    cursor: pointer;
  }

  & span {
    @include lt-md {
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
}

.drawer--active {
  & .burger span {
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

.drawer--active .drawer__overlay {
  @include lt-md {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.25s ease 0s, transform 0s ease 0s;
  }
}

.drawer--active .drawer__container {
  @include lt-md {
    transform: translateX(0);
    transition: transform 0.25s ease 0s;
  }
}

.phone {
  @include lt-md {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__icon {
    &--call {
      @include lt-md {
        width: 20px;
        height: 20px;
        fill: $color-dark-grey;
        padding: 8px;
      }
    }
  }
}
</style>
