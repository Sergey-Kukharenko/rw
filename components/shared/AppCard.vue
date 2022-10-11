<template>
  <div class="card">
    <div class="card__container">
      <a class="card__figure figure absolute-grow">
        <img
          :src="props.slide.img"
          class="absolute-center figure__img"
          :alt="props.slide.img"
        />
      </a>
      <div class="header">
        <app-badge theme="red" class="header__badge">
          {{ props.slide.sale.percent }}
        </app-badge>
        <button class="like">
          <SvgSprite symbol="heart" class="like__icon"/>
        </button>
      </div>
    </div>
    <div class="card__body">

      <div class="rating">
        <div class="rating__text">{{ props.slide.rating }}</div>
        <SvgSprite symbol="star" class="rating__icon"/>
        <div class="rating__reviews">12 560</div>
      </div>

      <div class="card__title">
        {{ props.slide.title }}
      </div>
      <div class="card__content content">
        <div class="content__price price">
          <div class="price__group group">
            <div class="price__old">£ {{ props.slide.price }}</div>
            <div class="group__badge">
              <app-badge theme="red">
                {{ props.slide.sale.percent }}
              </app-badge>
            </div>
          </div>
          <div class="price__current">£ {{ props.slide.price }}</div>
        </div>
        <div class="content__button">
          <app-button theme="green" size="sm">
            <span>Send</span>
          </app-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import AppBadge from './AppBadge.vue';
import AppButton from './AppButton.vue';

const props = defineProps({
  slide: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;

  @include gt-xs {
    box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
    border-radius: 14px;
  }

  @include xs {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  &__body {
    background: #fff;
    position: relative;
    z-index: 2;
  }

  &__figure {
    z-index: 1;
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    border-radius: 12px;
    box-sizing: border-box;

    @include gt-xs {
      height: 254px;
      padding: 8px;
    }

    @include xs {
      height: 144px;
      padding: 8px;
    }

    &:hover {
      .figure__img {
        transform: translate(-50%, -50%) scale(1.1);
      }
    }
  }

  &__title {
    position: relative;
    z-index: 2;
    color: #000;

    @include gt-xs {
      min-height: 40px;
      font-family: $golos-bold;
      font-size: 16px;
      line-height: 20px;
      padding: 10px 12px 8px;
    }

    @include xs {
      min-height: 28px;
      font-family: $golos-regular;
      font-size: 11px;
      line-height: 14px;
      padding: 6px 8px 0;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include gt-xs {
      padding: 0 12px 12px;
    }

    @include xs {
      padding: 5px 8px 7px;
    }
  }
}

.figure {
  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 0.35s, transform 0.35s;
  }
}

.rating {
  display: inline-flex;
  align-items: center;
  position: absolute;
  top: 8px;
  transform: translateY(-100%);
  color: $color-white-grey;
  background: #fff;
  border-radius: 0 8px 0 0;

  @include gt-xs {
    padding: 3px 10px 3px 12px;
  }

  @include xs {
    padding: 4px 6px 4px 8px;
  }

  &__text {
    font-family: $golos-regular;
    letter-spacing: -0.01em;

    @include gt-xs {
      font-size: 11px;
      line-height: 16px;
    }

    @include xs {
      font-size: 10px;
      line-height: 12px;
    }
  }

  &__icon {
    display: block;

    @include gt-xs {
      width: 13.32px;
      height: 12.66px;
      margin: 0 4px;
    }

    @include xs {
      width: 10px;
      height: 10px;
      margin-left: 2px;
    }
  }

  &__reviews {
    font-family: $golos-regular;

    @include gt-xs {
      font-size: 10px;
      line-height: 13px;
    }

    @include xs {
      display: none;
    }
  }
}

.like {
  &__icon {
    display: block;
    fill: #fff;
    stroke: #7C7C7C;

    @include gt-xs {
      width: 20px;
      height: 18.5px;
    }

    @include xs {
      width: 13.33px;
      height: 12.33px;
    }
  }
}

.price {
  @include xs {
    display: flex;
    flex-direction: column;
  }

  &__group {
    @include xs {
      order: 2;
    }
  }

  &__old {
    position: relative;
    font-family: $golos-regular;
    color: $color-white-grey;
    letter-spacing: 0.01em;

    @include gt-xs {
      font-size: 16px;
      line-height: 16px;
    }

    @include xs {
      font-size: 11px;
      line-height: 12px;
    }

    &:before,
    &:after {
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      transform: rotate(-10deg);
    }

    &:before {
      top: -1px;
      background: #fff;
    }

    &:after {
      background: #db1838;
    }
  }

  &__current {
    font-family: $golos-bold;

    @include gt-xs {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.03px;
    }

    @include xs {
      font-size: 14px;
      line-height: 16px;
      letter-spacing: -0.01em;
      margin-top: -1px;
    }
  }
}

.group {
  display: flex;

  @include gt-xs {
    align-items: center;
  }

  &__badge {
    @include gt-xs {
      margin-left: 8px;
    }

    @include xs {
      display: none;
    }
  }
}

.header {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;

  @include gt-xs {
    justify-content: end;
  }

  @include xs {
    justify-content: space-between;
  }

  &__badge {
    @include gt-xs {
      display: none;
    }

    @include xs {
      display: block;
    }
  }
}
</style>
