<template>
  <div class="layout layout-dt detail-page">
    <div class="detail-page__row" >
      <div class="detail-page__col">
        <app-gallery :items="product.items"/>
      </div>
      <div class="detail-page__col">
        <app-form :product="product"/>
        <app-service :service="product.service"/>
      </div>
    </div>

    <div class="detail-page__row about">
      <div class="detail-page__flex">
        <app-reviews :reviews="product.reviews"/>
      </div>
      <div class="detail-page__fix">
        <app-stars-rating />
      </div>
    </div>

    <app-popular-categories :popular="product.popular" />
  </div>
</template>

<script setup>
import products from '@/data/products';
import AppGallery from '@/components/ui/AppGallery.vue';
import AppForm from '@/components/card-product/AppForm.vue';
import AppPopularCategories from '@/components/card-product/AppPopularCategories.vue';
import AppService from '@/components/card-product/AppService.vue';
import AppReviews from '@/components/card-product/AppReviews.vue';
import AppStarsRating from '@/components/ui/AppStarsRating.vue';

const route = useRoute();
const name = +route.params.name;
const product = products.find((item) => item.id === name);

const rating = ref(4.6)
</script>

<style lang="scss" scoped>



.detail-page {
  &__row {
    @include gt-sm {
      display: flex;
    }
  }

  &__col{
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

  &__flex{
    //outline: 1px solid;
    flex: 1;
  }

  &__fix{
    //outline: 1px solid;
    flex: 0 0 344px;
  }
}

.about{

}
</style>
