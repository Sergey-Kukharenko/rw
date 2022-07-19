<template>
  <div>
    <div class="layout layout-dt detail-page">
      <div class="detail-page__col">
        <app-gallery :items="product.items"/>
      </div>
      <div class="detail-page__col">
        <h1 class="title">{{ product.title }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import products from '@/data/products';
import AppGallery from '@/components/ui/AppGallery.vue';

const route = useRoute();
const name = +route.params.name;
const product = products.find((item) => item.id === name);
</script>

<style lang="scss" scoped>
.detail-page {
  display: flex;

  &__col {
    width: 50%;
    //outline: 1px solid;
    box-sizing: border-box;

    &:first-child {
      padding-right: 12px;
    }

    &:last-child {
      padding-left: 12px;
    }
  }
}

.title {
  font-family: $golos-bold;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: -0.01em;
  color: #0d072e;
}
</style>
