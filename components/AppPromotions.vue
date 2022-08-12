<template>
  <section class="layout promotion">
    <nuxt-link to="/flowers/roses/0" v-for="promotion in promotions" :key="promotion.text" class="promotion__item">
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
    background: #e4f8ea;
    border-radius: $border-radius-ds;
    min-height: 96px;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;

    @include xs {
      min-height: 48px;
      padding: 10px 16px;
      border-radius: $border-radius-mb;
    }

    &:nth-child(1) {
      .promotion__image {
        right: -37px;
        top: -36px;

        @include xs {
          right: -9px;
          top: -37px;
        }
      }
    }

    &:nth-child(2) {
      .promotion__image {
        right: -47px;
        top: -169px;

        @include xs {
          right: -18px;
          top: -106px;
        }
      }
    }

    &:nth-child(3) {
      .promotion__image {
        right: -58px;
        top: -42px;

        @include xs {
          right: 3px;
          top: -33px;
        }
      }
    }
  }

  &__text,
  &__figure {
    width: 50%;
  }

  &__text {
    font-family: $golos-bold;
    letter-spacing: -0.01em;
    color: $color-green;

    @include xs {
      color: $color-dark-green;
      font-size: 12px;
      line-height: 14px;
      padding-right: 40px;
    }
  }

  &__figure {
    position: relative;
    margin: 0;
  }

  &__image {
    position: absolute;
  }
}
</style>
