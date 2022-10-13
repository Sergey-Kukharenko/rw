<template>
  <main>
    <app-promotions/>
    <app-popular-categories/>


    <app-section-sm :section="recipient"/>
    <app-section :section="specialOffers" theme="custom"/>

    <app-section :section="underPounds" theme="custom"/>
  </main>
</template>

<script setup>
import AppSection from '@/components/shared/AppSection.vue';
import AppSectionSm from '@/components/shared/AppSectionSm.vue';

import dataRecipient from '@/data/recipient';
import dataSpecialOffers from '@/data/special-offers';
import dataUnderPounds from '@/data/under-pounds';

const recipient = ref(dataRecipient);
const specialOffers = ref(dataSpecialOffers);
const underPounds = ref(dataUnderPounds);
</script>
