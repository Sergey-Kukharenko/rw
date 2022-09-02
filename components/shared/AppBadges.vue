<template>
  <div class="badges">
    <div v-for="badge in props.badges" :key="badge.status" class="badges__item">
      <app-badge :theme="badge.color" size="md-dt" :icon="badge.icon">
        {{ badge.info }}
      </app-badge>
    </div>
  </div>
</template>

<script setup>
import AppBadge from '@/components/shared/AppBadge.vue'

const props = defineProps({
  badges: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.badges {
  display: flex;
  flex-wrap: wrap;

  @include lt-md {
    margin: 0 -2px;
  }

  &__item {
    @include gt-sm {
      margin-top: 8px;

      &:not(:last-child) {
        margin-right: 8px;
      }
    }

    @include lt-md {
      margin: 2px;
    }
  }
}
</style>
