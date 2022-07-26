<template>
  <div class="layout layout-dt detail-page">
    <div class="detail-page__row">
      <div class="detail-page__col">
        <app-gallery :items="product.items" />
      </div>
      <div class="detail-page__col">
        <h1 class="title">{{ product.title }}</h1>
        <app-form :product="product" />
      </div>
    </div>

    <app-popular-categories :popular="product.popular"/>
  </div>
</template>

<script setup>
import products from '@/data/products'
import AppGallery from '@/components/ui/AppGallery.vue'
import AppForm from '@/components/card-product/AppForm.vue'
import AppPopularCategories from '@/components/card-product/AppPopularCategories.vue'

const route = useRoute()
const name = +route.params.name
const product = products.find((item) => item.id === name)
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
</style>
