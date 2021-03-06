<template>
  <section class="layout popular-categories">
    <h1 class="popular-title">Popular categories</h1>
    <div class="popular-list">
      <a v-for="item in popular" :key="item.hashTag" class="popular-list__item card">
        <div class="absolute-grow card__content">
          <img
            :key="item.hashTag"
            :src="item.img[getImg]"
            class="absolute-center card__image"
            :alt="item.hashTag"
          />
          <div v-if="item.timer" class="card__timer">
            <app-timer />
          </div>
        </div>

        <div class="card__figcaption">
          <span class="card__figcaption-text">{{ item.text }}</span>
          <span class="card__figcaption-hash">{{ item.hashTag }}</span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import AppTimer from '@/components/shared/AppTimer.vue'
import dataPopularCategories from '@/data/popular-categories'

const popular = ref(dataPopularCategories)
const isMobile = useIsMobile()
const getImg = isMobile.value ? 'mobile' : 'desktop'
</script>

<style scoped lang="scss">
.popular-title {
  display: none;

  @include xs {
    display: block;
  }
}

.popular-list {
  display: grid;

  @include gt-sm {
    column-gap: $gap-ds;
    row-gap: $gap-mb;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 182px);
  }

  @include sm {
    grid-gap: $gap-mb;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 182px);
  }

  @include xs {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-gap: 5px;
  }

  &__item {
    &:nth-child(1) {
      grid-column: 1 / span 2;
      grid-row: 1 / span 2;
      padding: 20px;

      @include lt-md {
        grid-row: 1 / span 1;
      }

      @include xs {
        padding: 0;
        border-radius: 0;
      }

      .card__figcaption {
        box-sizing: border-box;

        @include gt-xs {
          max-width: 252px;
          font-size: 38px;
          line-height: 40px;
          padding-top: 11px;
        }

        @include xs {
          font-size: 13px;
          line-height: 16px;
          text-align: center;
          padding: 11px 0;
        }
      }

      .card__image {
        @include sm {
          transform: translate(48px, -50%);
        }

        @include xs {
          transform: translate(0, -50%);
        }
      }
    }

    &:not(:first-child) {
      @include gt-xs {
        padding: $gap-mb;
      }

      @include xs {
        padding: 0;
      }

      .card__figcaption {
        @include gt-xs {
          display: inline-block;
          font-size: 12px;
          line-height: 16px;
          background: #fff;
          padding: 6px;
          border-radius: 10px;
        }

        @include xs {
          font-size: 13px;
          text-align: center;
          background: none;
          padding: 11px 0;
          border-radius: 0;
        }
      }

      .card__figcaption-text {
        @include gt-xs {
          display: none;
        }

        @include xs {
          display: block;
        }
      }

      .card__figcaption-hash {
        color: #26ad4f;
        @include gt-xs {
          display: block;
        }

        @include xs {
          display: none;
        }
      }
    }
  }
}

.card {
  @include gt-xs {
    width: 100%;
    height: 100%;
    position: relative;
    padding: $gap-mb;
    margin: 0;
    box-sizing: border-box;
  }

  @include xs {
    display: grid;
    grid-template-rows: 92px auto;
  }

  &__content {
    background: $bg-grey;
    overflow: hidden;

    @include gt-xs {
      margin: auto;
      border-radius: $border-radius-ds;
    }

    @include xs {
      position: relative;
      z-index: 1;
      margin: 0;
      border-radius: 12px;
    }
  }

  &__image {
    @include gt-xs {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }

    @include xs {
      mix-blend-mode: multiply;
      margin: 0;
      top: 50%;
      left: 50%;
      transform: translate(-45%, -30%);
    }
  }

  &__figcaption {
    position: relative;
    z-index: 2;
    font-family: $golos-bold;
    letter-spacing: -0.01em;
    color: $color-dark-grey;
  }

  &__timer {
    position: absolute;
    z-index: 2;

    @include gt-xs {
      bottom: 20px;
      left: 20px;
    }

    @include xs {
      bottom: 10px;
      left: $gap-mb;
    }
  }
}
</style>
