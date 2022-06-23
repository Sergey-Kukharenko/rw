<template>
  <NuxtLayout name="default">

    <app-promotions />
    <app-popular-categories />

  </NuxtLayout>
</template>

<script setup>

import AppPromotions from '@/components/AppPromotions.vue';
import AppPopularCategories from '@/components/AppPopularCategories.vue';

</script>
