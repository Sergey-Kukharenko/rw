<template>
  <div class="form">
    <h1 class="form__title">{{ props.product.title }}</h1>

    <div class="form__section section" v-if="isSizePage">
      <div class="section__item item">
        <div class="item__header">Choose size</div>
        <div class="item__body item__body--sm-include-border">
          <app-sizes :sizes="props.product.choose_size" @setSize="onSetSize" />
        </div>
      </div>
    </div>

    <div class="form__section section" v-else>
      <div class="section__item item">
        <div class="item__header">
          <div class="item__header-number">1.</div>
          <div class="item__header-text">
            Choose {{ props.product.type_of_flowers }} color:
          </div>
          <div class="item__header-content">{{ itemColor.name }}</div>
        </div>
        <div class="item__body">
          <app-list :list="props.product.choose_color" @setItem="onSetColor" />
        </div>
      </div>

      <div class="section__item item">
        <div class="item__header">
          <div class="item__header-number">2.</div>
          <div class="item__header-text">
            Number of {{ props.product.type_of_flowers }}:
          </div>
          <div class="item__header-content item__header-content--wrapping">
            <app-counter v-model:count="count" />
          </div>
        </div>
      </div>

      <div class="section__item item">
        <div class="item__header">
          <div class="item__header-number">3.</div>
          <div class="item__header-text">Choose package:</div>
          <div class="item__header-content">{{ itemPackage.name }}</div>
        </div>
        <div class="item__body">
          <app-list
            :list="props.product.choose_package"
            @setItem="onSetPackage"
          />
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

        <div class="badges">
          <div
            class="badges__item"
            v-for="badge in props.product.badges"
            :key="badge.status"
          >
            <app-badge :theme="badge.color" size="md-dt" :icon="badge.icon">
              {{ badge.info }}
            </app-badge>
          </div>
        </div>
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
import AppList from '@/components/card-product/AppList.vue'
import AppSizes from '@/components/card-product/AppSizes.vue'
import AppCounter from '@/components/card-product/AppCounter.vue'
import AppBadge from '@/components/shared/AppBadge.vue'
import AppButton from '@/components/shared/AppButton.vue'

const props = defineProps({
  product: {
    type: Object,
    default: () => {}
  }
})

const itemColor = ref(props?.product?.choose_color?.[0])
const itemPackage = ref(props?.product?.choose_package?.[0])
const itemSize = ref(props?.product?.choose_size?.[0])
const count = ref(props?.product?.count)
const like = ref(props.product.like)

const classNames = computed(() =>
  useToggleClassName(like.value, 'like', 'active')
)

const isSizePage = computed(() => props.product.type_of_page === 'size_page')

const onSetColor = (payload) => {
  itemColor.value = payload
}

const onSetPackage = (payload) => {
  itemPackage.value = payload
}

const onSetSize = (payload) => {
  itemSize.value = payload
}

const toggleLike = () => {
  like.value = !like.value
}

const createPageTypeObject = () => {
  if (isSizePage.value) {
    return {
      size: itemSize.value.title,
      like: like.value
    }
  } else {
    return {
      color: itemColor.value.name,
      count: count.value,
      package: itemPackage.value.name
    }
  }
}

const addToCart = () => {
  console.log(createPageTypeObject())
}
</script>

<style lang="scss" scoped>
.form {
  &__title {
    font-family: $Literata;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: #0d072e;

    @include gt-sm {
      font-size: 38px;
      line-height: 40px;
    }

    @include lt-sm {
      font-size: 24px;
      line-height: 24px;
      margin: 22px 0 16px 0;
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

.badges {
  display: flex;
  flex-wrap: wrap;

  @include lt-md {
    margin: 0 -2px;
  }

  &__item {
    @include gt-sm {
      margin-top: 8px;

      &:not(:last-child) {
        margin-right: 8px;
      }
    }

    @include lt-md {
      margin: 2px;
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
