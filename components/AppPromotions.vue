<template>
  <section class="layout promotion">
    <nuxt-link
      to="/flowers/roses/0"
      v-for="promotion in promotions"
      :key="promotion.text"
      class="promotion__item"
    >
      <div class="promotion__text">
        {{ promotion.text }}
      </div>
      <figure class="promotion__figure">
        <img
          :src="promotion.img[getImg]"
          class="promotion__image"
          :alt="promotion.text"
        />
      </figure>
    </nuxt-link>
  </section>
</template>

<script setup>
import dataPromotions from '@/data/promotions'

const promotions = ref(dataPromotions)
const isMobile = useIsMobile()
const getImg = isMobile.value ? 'mobile' : 'desktop'
</script>

<style scoped lang="scss">
.promotion {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  grid-gap: $gap-ds;

  @include lt-md {
    margin: 14px 0;
  }

  @include sm {
    grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
    grid-gap: $gap-mb;
  }

  @include xs {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    grid-gap: 8px;
  }

  &__item {
    display: flex;
    align-items: center;
    background: #fff2d5;
    border-radius: $border-radius-ds;
    min-height: 96px;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;

    @include xs {
      position: relative;
      min-height: 48px;
      padding: 12px 16px;
      border-radius: $border-radius-mb;
    }

    &:nth-child(1) {
      .promotion__image {
        top: -78px;
        right: -162px;

        @include xs {
          top: -53px;
          right: -98px;
        }
      }
    }

    &:nth-child(2) {
      .promotion__image {
        top: -74px;
        right: -30px;

        @include xs {
          top: -38px;
          right: -17px;
        }
      }
    }

    &:nth-child(3) {
      .promotion__image {
        top: -52px;
        right: -12px;

        @include xs {
          top: -33px;
          right: -8px;
        }
      }
    }
  }

  &__text {
    color: #2f2b20;

    @include gt-xs {
      width: 50%;
      font-family: $golos-bold;
      letter-spacing: -0.01em;
    }

    @include xs {
      max-width: 155px;
      font-family: $golos-medium;
      font-size: 13px;
      line-height: 16px;
    }
  }

  &__figure {
    @include gt-xs {
      width: 50%;
      position: relative;
    }

    @include xs {
      width: 50%;
      height: 0;
      position: absolute;
      top: 0;
      right: 16px;
      bottom: 0;
      margin: auto;
    }
  }

  &__image {
    position: absolute;
  }
}
</style>
