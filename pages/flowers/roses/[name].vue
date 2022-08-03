<template>
  <div class="layout layout-dt detail-page">
    <div class="detail-page__row" >
      <div class="detail-page__col">
        <app-gallery :items="product.items" />
      </div>
      <div class="detail-page__col">
        <app-form :product="product" />
        <app-service :service="product.service" />
      </div>
    </div>

    <div class="about">
      <h2 class="about__title">
        {{ product.reviews.title }}
      </h2>
      <div class="about__row">
        <div class="about__reviews">
          <app-reviews :reviews="product.reviews.list" />
        </div>
        <div class="about__rating">
          <app-rating :rating="product.rating" />
        </div>
      </div>
    </div>

    <app-popular-categories :popular="product.popular"  />
  </div>
</template>

<script setup>
import products from '@/data/products'
import AppGallery from '@/components/ui/AppGallery.vue'
import AppForm from '@/components/card-product/AppForm.vue'
import AppPopularCategories from '@/components/card-product/AppPopularCategories.vue'
import AppService from '@/components/card-product/AppService.vue'
import AppReviews from '@/components/card-product/AppReviews.vue'
import AppRating from '@/components/card-product/AppRating.vue'

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

.about {
  &__title {
    font-family: $Literata;
    font-style: normal;
    font-weight: 700;

    color: #000000;

    @include gt-sm {
      font-size: 28px;
      line-height: 32px;
    }

    @include lt-md {
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__reviews,
  &__rating {
    // outline: 1px solid;
  }

  &__reviews {
    @include gt-sm {
      flex: 0 0 620px;
    }

    @include lt-md {
      order: 1;
    }
  }

  &__rating {
    @include gt-sm {
      flex: 0 0 344px;
    }

    @include lt-md {
      width: 100%;
    }
  }

  &__text {
    font-family: $golos-bold;
    font-size: 16px;
    line-height: 20px;
    color: #000;
    margin-right: 10px;
  }
}
</style>
