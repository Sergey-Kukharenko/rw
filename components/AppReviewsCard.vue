<template>
  <div class="card">
    {{props.slide}}
  </div>
</template>

<script setup>

const props = defineProps({
  slide: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style lang="scss" scoped>
.card {

}
</style>
