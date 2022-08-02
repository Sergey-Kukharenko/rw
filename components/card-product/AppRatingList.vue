<template>
  <div class="list">
    <div class="list__item" v-for="item in rating.list" :key="item.stars">
      {{ item.stars }}
      {{ item.count }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  rating: {
    type: Object,
    default: () => {},
  },
})
</script>

<style lang="scss" scoped>
.list {
  margin: 0;

  &__item {
    margin: 0;
  }
}
</style>