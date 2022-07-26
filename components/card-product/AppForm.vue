<template>
  <div class="form">
    <div class="steps">
      <div class="steps__item item">
        <div class="item__header">
          <div class="item__header-number">1.</div>
          <div class="item__header-text">Choose roses color:</div>
          <div class="item__header-content">{{ itemColor.name }}</div>
        </div>
        <div class="item__body">
          <app-list :list="product.choose_color" @setItem="onSetColor" />
        </div>
      </div>

      <div class="steps__item item">
        <div class="item__header">
          <div class="item__header-number">2.</div>
          <div class="item__header-text">Number of roses:</div>
          <div class="item__header-content">
            <app-counter :count="product.count" />
          </div>
        </div>
      </div>

      <div class="steps__item item">
        <div class="item__header">
          <div class="item__header-number">3.</div>
          <div class="item__header-text">Choose package:</div>
          <div class="item__header-content">{{ itemPackage.name }}</div>
        </div>
        <div class="item__body">
          <app-list :list="product.choose_package" @setItem="onSetPackage" />
        </div>
      </div>
    </div>

    <div class="form__footer">
      <div class="form__footer-price">
        <div class="price">
          <div class="price__current">
            {{ product.currency }}{{ product.price.current }}
          </div>
          <div class="price__old">
            {{ product.currency }}{{ product.price.old }}
          </div>
        </div>
      </div>

      <div class="badges">
        <div
          class="badges__item"
          v-for="badge in product.badges"
          :key="badge.status"
        >
          <app-badge :theme="badge.color" size="md" :icon="badge.icon">
            {{ badge.info }}
          </app-badge>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppList from '@/components/card-product/AppList.vue'
import AppCounter from '@/components/card-product/AppCounter.vue'
import AppBadge from '@/components/shared/AppBadge.vue'

const props = defineProps({
  product: {
    type: Object,
    default: () => {},
  },
})

const itemColor = ref(props.product.choose_color[0])
const itemPackage = ref(props.product.choose_package[0])
const count = ref(null)

const onSetColor = (payload) => {
  itemColor.value = payload
}

const onSetPackage = (payload) => {
  itemPackage.value = payload
}
</script>

<style lang="scss" scoped>
form {
  &__footer {
    display: flex;
    align-items: center;
  }
}

.steps {
  border-bottom: 1px solid #eaeaea;

  @include gt-sm {
    padding-bottom: 4px;
    margin: 26px 0 0;
  }

  &__item {
    @include gt-sm {
      margin: 16px 0;
    }

    @include lt-sm {
      margin: 16px 0;
    }
  }
}

.item {
  &__header {
    display: flex;
    align-items: center;
    font-family: $golos-regular;
    font-size: 15px;
    line-height: 24px;
  }

  &__header-number {
    margin: 0;
  }

  &__header-text {
    margin: 0 9px 0 7px;
  }

  &__header-content {
    color: $color-white-grey;
    margin: 0;
  }

  &__body {
    @include lt-sm {
      margin: 0 -6px;
      overflow: hidden;
    }
  }
}

.price {
  flex-shrink: 0;
  display: flex;
  align-items: baseline;

  &__current {
    font-family: $golos-medium;
    font-size: 40px;
    line-height: 48px;
    color: #000000;
  }

  &__old {
    position: relative;
    font-family: $golos-regular;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.01em;
    color: $color-white-grey;
    margin-left: 10px;

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
  margin-top: 8px;

  &__item {
    &:not(:first-child) {
      margin-left: 8px;
    }
  }
}
</style>
