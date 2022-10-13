<template>
  <section class="layout section">
    <h2 class="title">{{ props.section.title }}</h2>

    <app-section-grid-sm
      v-slot="slotProps"
      :slides="props.section.list"
      :theme="props.theme"
    >
      <app-card-sm :slide="{ ...slotProps }" />
    </app-section-grid-sm>
  </section>
</template>

<script setup>
import AppSectionGridSm from '@/components/shared/AppSectionGridSm.vue'
import AppCardSm from '@/components/shared/AppCardSm.vue'

const props = defineProps({
  section: {
    type: Object,
    default: () => ({})
  },

  theme: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.title {
  font-family: $Literata;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;

  @include gt-sm {
    font-size: 28px;
    line-height: 32px;
    margin: 0 0 22px 0;
  }

  @include lt-md {
    font-size: 20px;
    line-height: 24px;
    margin: 0 0 16px 0;
  }
}
</style>
