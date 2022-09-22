<template>
  <button @click="open">
    button
  </button>

  <app-drawer-nested :visible="isVisible" @close="close" title="SOME">
    HERE CONTENT
  </app-drawer-nested>
</template>

<script setup>
import AppDrawerNested from '@/components/header/AppDrawerNested';

const isVisible = ref(false);

const open = () => {
  isVisible.value = true;
};

const close = () => {
  isVisible.value = false;
};
</script>

<style lang="scss" scoped>
.section {
  opacity: 1;
  transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;

  &--active {
    opacity: 0;
    transform: translateX(-40%);
  }
}
</style>
