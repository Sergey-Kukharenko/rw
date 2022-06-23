<template>
  <NuxtLayout name="default">

    <app-promotions />
    <app-popular-categories />

    <app-special-offers />
  </NuxtLayout>
</template>

<script setup>

import AppPromotions from '@/components/AppPromotions.vue';
import AppPopularCategories from '@/components/AppPopularCategories.vue';

import AppSpecialOffers from '@/components/AppSpecialOffers.vue';
</script>
