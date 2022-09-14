<template>
  <div>
        <app-header-mobile v-if="isDevice"/>
        <app-header v-else/>
        <app-breadcrumbs/>
        <slot/>
        <app-footer/>

<!--    <app-profile-preview />-->
  </div>
</template>

<script setup>
import AppHeader from '@/components/header/AppHeader.vue'
import AppHeaderMobile from '@/components/header/AppHeaderMobile.vue'
import AppBreadcrumbs from '@/components/shared/AppBreadcrumbs.vue'
import AppFooter from '@/components/footer/AppFooter.vue'


import { useIsDevice } from '@/composables/states'
import AppProfilePreview from '@/components/header/profile/AppProfilePreview';

const isDevice = useIsDevice()
</script>
