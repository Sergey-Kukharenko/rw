<template>
  <div class="form">
    <h1 class="form__title">{{ props.product.title }}</h1>

    <div class="section">
      <div class="section__item item">
        <div class="item__header">Choose size</div>
        <div class="item__body item__body--sm-include-border">
          <app-sizes :sizes="props.product.choose_size" @setSize="onSetSize" />
        </div>
      </div>
    </div>

    <div class="form__footer">
      <div class="form__footer-price">
        <div class="price">
          <div class="price__current">
            {{ props.product.currency }}{{ props.product.price.current }}
          </div>
          <div class="price__old">
            {{ props.product.currency }}{{ props.product.price.old }}
          </div>
        </div>
        <app-badges :badges="props.product.badges" />
      </div>

      <div class="group-buttons">
        <div class="group-buttons__item">
          <app-button theme="green" stretch="fix" @click="addToCart">
            Send now
          </app-button>
        </div>
        <div class="group-buttons__item">
          <app-button theme="grey" @click="toggleLike">
            <SvgSprite symbol="heart" :class="classNames" />
          </app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppSizes from '@/components/card-product/AppSizes.vue'
import AppBadges from '@/components/shared/AppBadges.vue'
import AppButton from '@/components/shared/AppButton.vue'

const props = defineProps({
  product: {
    type: Object,
    default: () => ({})
  }
})

const itemSize = ref(props?.product?.choose_size?.[0])
const like = ref(props.product.like)

const classNames = computed(() =>
  useToggleClassName(like.value, 'like', 'active')
)

const onSetSize = (payload) => {
  itemSize.value = payload
}

const toggleLike = () => {
  like.value = !like.value
}

const addToCart = () => {
  console.log({
    size: itemSize.value.title,
    like: like.value
  })
}
</script>

<style lang="scss" scoped>
.form {
  &__title {
    @include gt-sm {
      margin-top: 8px;
    }

    @include lt-sm {
      margin-top: 22px;
    }
  }

  &__footer {
    @include gt-sm {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 28px 0;
    }

    @include lt-md {
      padding: 20px 0;
    }
  }

  &__footer-price {
    margin-top: -4px;

    @include lt-md {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}

.section {
  border-bottom: 1px solid #eaeaea;

  @include gt-sm {
    padding-bottom: 4px;
    margin: 26px 0 0;
  }

  &__item {
    @include gt-sm {
      margin: 16px 0;
    }

    @include lt-md {
      margin: 12px 0;

      &:last-child {
        margin-bottom: 8px;
      }
    }
  }
}

.item {
  &__header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-family: $golos-regular;

    @include gt-sm {
      font-size: 15px;
      line-height: 24px;
    }

    @include lt-md {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.01em;
    }
  }

  &__header-number {
    margin: 0;
  }

  &__header-text {
    margin: 0 9px 0 7px;
  }

  &__header-content {
    color: $color-white-grey;

    @include gt-sm {
      margin: 0;
    }

    &--wrapping {
      @include lt-md {
        display: flex;
        width: 100%;
        margin: 11px 0 6px 0;
      }
    }
  }

  &__body {
    @include lt-sm {
      margin: 3px -14px;
      overflow: hidden;
    }

    &--sm-include-border {
      @include lt-sm {
        margin: 3px 0;
      }
    }
  }
}

.price {
  flex-shrink: 0;
  display: flex;

  @include gt-sm {
    align-items: baseline;
  }

  @include lt-sm {
    align-items: center;
  }

  &__current {
    color: #000000;

    @include gt-sm {
      font-family: $golos-medium;
      font-size: 40px;
      line-height: 48px;
    }

    @include lt-md {
      font-family: $golos-bold;
      font-size: 32px;
      line-height: 40px;
    }
  }

  &__old {
    position: relative;
    font-family: $golos-regular;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.01em;
    color: $color-white-grey;

    @include gt-sm {
      margin-left: 10px;
    }

    @include lt-sm {
      margin: 0 0 -8px 6px;
    }

    &:before,
    &:after {
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: -2px;
      right: -2px;
      margin: auto;
      transform: rotate(-26.07deg);
    }

    &:before {
      top: -1px;
      background: #fff;
    }

    &:after {
      background: #db1838;
    }
  }
}

.group-buttons {
  display: flex;

  @include lt-md {
    margin: 8px 0;
  }

  &__item {
    &:not(:first-child) {
      margin-left: 8px;
    }
  }
}

.like {
  display: block;
  width: 20px;
  height: 18.5px;
  fill: #99a2ad00;
  stroke: #99a2ad;
  transition: fill 0.2s ease-out 0s, stroke 0.2s ease-out 0s;

  &--active {
    fill: #99a2ad;
    stroke: #99a2ad;
  }
}
</style>
