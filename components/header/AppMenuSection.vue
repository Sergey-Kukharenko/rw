<template>
  <div class="section">
    <div class="section__title">{{ props.section.title }}</div>

    <div class="section__list list">
      <div
        v-for="(item, idx) in props.section.list"
        :key="idx"
        class="list__item"
      >
        <div class="container">
          <div class="container__text">{{ item.text }}</div>
          <app-badge
            v-if="item.status"
            class="container__badge"
            theme="orange"
            size="xs"
          >
            {{ item.status }}
          </app-badge>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppBadge from '@/components/shared/AppBadge.vue'

const props = defineProps({
  section: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.section {
  color: #000;
  margin: 24px 0 18px;

  &__title {
    font-family: $golos-bold;
    font-size: 16px;
    line-height: 20px;
  }
}

.list {
  // display: flex;
  // flex-flow: wrap column;
  // max-height: 224px;

  display: grid;
  gap: 0 16px;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 32px);
  margin: 14px 0;

  &__item {
    display: flex;
  }
}

.container {
  display: flex;
  align-items: center;

  &__text {
    font-family: $golos-regular;
    font-size: 14px;
    line-height: 20px;
  }

  &__badge {
    margin-left: 6px;
  }
}
</style>
