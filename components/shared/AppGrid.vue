<template>
  <div class="grid">
    <div class="grid__item" v-for="(slide, idx) in slides" :key="idx">
      <slot v-bind="{ ...slide }"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  slides: Array,
});
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(24%, 1fr));
  row-gap: 32px;
}
</style>
