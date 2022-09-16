<template>
  <div>
    <app-header-mobile v-if="isDevice"/>
    <app-header v-else/>
    <app-breadcrumbs/>
    <slot/>
    <app-footer/>

<!--    <app-search/>-->

  </div>
</template>

<script setup>
import AppHeader from '@/components/header/AppHeader.vue';
import AppHeaderMobile from '@/components/header/AppHeaderMobile.vue';
import AppBreadcrumbs from '@/components/shared/AppBreadcrumbs.vue';
import AppFooter from '@/components/footer/AppFooter.vue';

import AppSearch from '@/components/header/search/AppSearch.vue';


import {useIsDevice} from '@/composables/states';

const isDevice = useIsDevice();
</script>
