<template>
  <div class="profile">
    <AppDropdown>
      <template #button>
        <div class="cart">
          <figure class="cart__figure">
            <SvgSprite
              symbol="profile"
              class="cart__icon"
              width="26.45"
              height="24"
            />
          </figure>
          <figcaption class="cart__figcaption">Log in / Register</figcaption>
        </div>
      </template>
      <template #dropdown>
        <div>
          dropdown content
        </div>
      </template>
    </AppDropdown>
  </div>
</template>

<script setup>
import AppDropdown from '@/components/shared/AppDropdown.vue'
</script>

<style lang="scss" scoped>
.cart {
  cursor: pointer;

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin: 0 auto;
  }

  &__icon {
    fill: #979797;
  }

  &__figcaption {
    font-family: $golos-medium;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: $color-white-grey;
    margin-top: 7px;
  }
}
</style>
