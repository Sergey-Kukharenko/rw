<template>
  <div class="section">
    <div class="section__title">
      {{ props.section.title }}
    </div>
    <div class="section__list list">
      <a class="list__item" v-for="item in props.section.list" :key="item">
        {{ item.name }}
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  section: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style lang="scss" scoped>
.section {
  &__title {
    font-family: $golos-bold;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.03px;
  }

  &__list {
    margin-top: 14px;
  }
}

.list {
  &__item {
    display: block;
    font-family: $golos-regular;
    font-size: 15px;
    line-height: 24px;
    padding: 8px 0;
  }
}
</style>