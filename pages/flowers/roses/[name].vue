<template>
  <div class="layout layout-dt detail-page">
    <div class="detail-page__row">
      <div class="detail-page__col">
        <app-gallery :items="product.items" />
        <app-notification :notification="product.notification" />
      </div>
      <div class="detail-page__col">
        <app-form-sizes v-if="isSizePage" :product="product" />
        <app-form-lists v-if="isListsPage" :product="product" />
        <app-service :service="product.service" />
      </div>
    </div>

    <div class="detail-page__about about">
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

    <div class="detail-page__section">
      <app-similar />
    </div>
    <div class="detail-page__section">
      <app-recently />
    </div>
    <div class="detail-page__section">
      <app-popular-categories :popular="product.popular" />
    </div>
  </div>
</template>

<script setup>
import products from '@/data/products'
import AppGallery from '@/components/ui/AppGallery.vue'
import AppFormSizes from '@/components/card-product/AppFormSizes.vue'
import AppFormLists from '@/components/card-product/AppFormLists.vue'
import AppService from '@/components/card-product/AppService.vue'
import AppReviews from '@/components/card-product/AppReviews.vue'
import AppRating from '@/components/card-product/AppRating.vue'
import AppSimilar from '@/components/AppSimilar.vue'
import AppRecently from '@/components/AppRecently.vue'
import AppPopularCategories from '@/components/card-product/AppPopularCategories.vue'
import AppNotification from '@/components/card-product/AppNotification.vue'

const route = useRoute()
const name = +route.params.name
const product = products.find((item) => item.id === name)
const isSizePage = computed(() => product.type_of_page === 'size_page')
const isListsPage = computed(() => product.type_of_page === 'lists_page')
</script>

<style lang="scss" scoped>
.detail-page {
  &__row {
    @include gt-sm {
      display: flex;
    }
  }

  &__col {
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

  &__section {
    @include gt-sm {
      margin: 76px 0;
    }

    @include lt-md {
      margin: 40px 0;
    }
  }
}

.about {
  &__title {
    @include gt-sm {
      margin: 0 0 16px 0;
    }
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
