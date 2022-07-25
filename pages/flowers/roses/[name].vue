<template>
  <div class="layout layout-dt detail-page">
    <div class="detail-page__row">
      <div class="detail-page__col">
        <app-gallery :items="product.items" />
      </div>
      <div class="detail-page__col">
        <h1 class="title">{{ product.title }}</h1>

        <div class="steps">
          <div class="steps__item item">
            <div class="item__header">
              <span class="item__header-number">1.</span>
              <span class="item__header-text">Choose roses color:</span>
              <span class="item__header-choice">{{ itemColor.name }}</span>
            </div>
            <div class="item__body">
              <app-list :list="product.choose_color" @setItem="onSetColor" />
            </div>
          </div>

          <div class="steps__item item">
            <div class="item__header">
              <span class="item__header-number">2.</span>
              <span class="item__header-text">Number of roses:</span>
              <span class="item__header-choice">{{ itemPackage.name }}</span>
            </div>
            <div class="item__body">
              <app-list
                :list="product.choose_package"
                @setItem="onSetPackage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <app-popular-categories :popular="product.popular" />
  </div>
</template>

<script setup>
import products from '@/data/products'
import AppGallery from '@/components/ui/AppGallery.vue'
import AppList from '@/components/card-product/AppList.vue'
import AppPopularCategories from '@/components/card-product/AppPopularCategories.vue'

const route = useRoute()
const name = +route.params.name
const product = products.find((item) => item.id === name)

const itemColor = ref(product.choose_color[0])
const itemPackage = ref(product.choose_package[0])

const onSetColor = (payload) => {
  itemColor.value = payload
}

const onSetPackage = (payload) => {
  itemPackage.value = payload
}
</script>

<style lang="scss" scoped>
.detail-page {
  &__row {
    @include gt-sm {
      display: flex;
    }
  }

  &__col {
    //outline: 1px solid;
    box-sizing: border-box;

    @include gt-sm {
      width: 50%;

      &:first-child {
        padding-right: 12px;
      }

      &:last-child {
        padding-left: 12px;
      }
    }
  }
}

.title {
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
    margin: 22px 0;
  }
}

.steps {
  margin: 0;

  &__item {
    @include gt-sm {
      margin: 30px 0;
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

  &__header-choice {
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
</style>
