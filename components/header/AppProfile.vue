<template>
  <div class="profile">
    <app-dropdown>
      <template #button>
        <div class="card">
          <figure class="card__figure">
            <SvgSprite
              symbol="profile"
              class="card__icon"
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
import AppDropdown from '@/components/shared/AppDropdown.vue';
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;

  @include xs {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;

    @include gt-xs {
      width: 28px;
      height: 28px;
      margin: 0 auto;
    }

    @include xs {
      width: 32px;
      height: 32px;
      background: #F7F7F7;
      border-radius: 50%;
    }
  }

  &__icon {
    fill: $color-light-grey;

    @include gt-xs {
      width: 26.45px;
      height: 24px;
    }

    @include xs {
      width: 10px;
      height: 11px;
    }
  }

  &__figcaption {
    text-align: center;
    color: $color-white-grey;

    @include gt-xs {
      font-family: $golos-medium;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      margin-top: 7px;
    }

    @include xs {
      font-family: $golos-regular;
      font-size: 12px;
      line-height: 16px;
      margin-left: 8px;
    }
  }

  &:hover {
    opacity: 0.75;
  }
}
</style>
