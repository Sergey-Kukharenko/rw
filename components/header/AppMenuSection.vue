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
          <div v-if="item.icon" class="container__figure">
            <SvgSprite
              :symbol="item.icon"
              v-bind:="item.style"
            />
          </div>
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
    padding: 0 16px;
  }
}

.list {
  display: grid;
  // gap: 0 40px;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 32px);
  margin: 12px 0;
  padding: 0 16px;
  // border-left: 1px solid #eaeaea;
  position: relative;

  &__item {
    display: flex;
    padding-right: 40px;
  }
}

.container {
  display: flex;
  align-items: center;

  &__figure{
    width: 21px;
    height: 21px;
    flex-shrink: 0;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__text {
    flex: 1;
    font-family: $golos-regular;
    font-size: 14px;
    line-height: 20px;
  }

  &__badge {
    margin-left: 6px;
  }
}
</style>
