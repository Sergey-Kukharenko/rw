<template>
  <nav class="navigation-user">
    <div class="navigation-user__item">
      <a class="card">
        <div class="card__figure">
          <SvgSprite
            symbol="hart"
            class="card__icon"
            width="20"
            height="18.5"
          />
        </div>
        <figcaption class="card__figcaption">Favorite</figcaption>
      </a>
    </div>
    <div class="navigation-user__item">
      <a class="card">
        <div class="card__figure">
          <SvgSprite symbol="card" class="card__icon" width="24" height="24" />
        </div>
        <figcaption class="card__figcaption">Basket</figcaption>
      </a>
    </div>
    <div class="navigation-user__item">
      <app-profile />
    </div>
  </nav>
</template>

<script setup>
import AppProfile from '@/components/header/AppProfile.vue'
</script>

<style lang="scss" scoped>
.navigation-user {
  display: flex;
  align-items: center;

  @include gt-md {
    margin: 0 -32px;
  }

  @include md {
    margin: 0 -16px;
  }

  @include sm {
    margin: 0 -8px;
  }

  &__item {
    @include gt-md {
      padding: 0 32px;
    }

    @include md {
      margin: 0 16px;
    }

    @include sm {
      margin: 0 8px;
    }
  }
}

.card {
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
