<template>
  <div>
<!--    <app-header />-->
    <app-breadcrumbs />
    <slot />
<!--    <app-footer />-->
  </div>
</template>

<script setup>
import AppHeader from '@/components/header/AppHeader.vue'
import AppBreadcrumbs from '@/components/shared/AppBreadcrumbs.vue'
import AppFooter from '@/components/footer/AppFooter.vue'
</script>
