<template>
  <NuxtLayout name="default">
    <app-notification />
    <app-promotions />
    <app-popular-categories />
    <app-bestsellers />
    <app-special-offers />
  </NuxtLayout>
</template>

<script setup>
import AppNotification from '@/components/AppNotification.vue';
import AppPromotions from '@/components/AppPromotions.vue';
import AppPopularCategories from '@/components/AppPopularCategories.vue';
import AppBestsellers from '@/components/AppBestsellers.vue';
import AppSpecialOffers from '@/components/AppSpecialOffers.vue';
</script>
