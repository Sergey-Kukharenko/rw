<template>
  <div class="profile">
    <app-dropdown>
      <template #button>
        <div class="card">
          <figure class="card__figure">
            <SvgSprite
              symbol="profile"
              class="card__icon"
              width="26.45"
              height="24"
            />
          </figure>
          <figcaption class="card__figcaption">Log in / Register</figcaption>
        </div>
      </template>
      <template #dropdown>
        <div>dropdown content</div>
      </template>
    </app-dropdown>
  </div>
</template>

<script setup>
import AppDropdown from '@/components/shared/AppDropdown.vue'
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;

  @include xs {

  }

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin: 0 auto;
  }

  &__icon {
    fill: $color-light-grey;
  }

  &__figcaption {
    font-family: $golos-medium;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: $color-white-grey;
    margin-top: 7px;
  }

  &:hover {
    opacity: 0.75;
  }
}
</style>
