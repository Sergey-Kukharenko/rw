<template>
  <main>
    <app-promotions />
    <app-popular-categories />
    <app-section :section="bestBouquets" />
    <app-section-sm :section="recipient" />
    <app-section :section="specialOffers" theme="custom" />
    <app-section :section="underPounds" theme="custom" />
    <app-shop-by-price />
    <app-section-sm :section="pickBouquet" theme="custom" />
  </main>
</template>

<script setup>
import AppSection from '@/components/shared/AppSection.vue'
import AppSectionSm from '@/components/shared/AppSectionSm.vue'

import dataRecipient from '@/data/recipient'
import dataPickBouquet from '@/data/pick-bouquet'
import dataBestBouquets from '@/data/best-bouquets'
import dataSpecialOffers from '@/data/special-offers'
import dataUnderPounds from '@/data/under-pounds'

const recipient = ref(dataRecipient)
const pickBouquet = ref(dataPickBouquet)
const bestBouquets = ref(dataBestBouquets)
const specialOffers = ref(dataSpecialOffers)
const underPounds = ref(dataUnderPounds)
</script>
