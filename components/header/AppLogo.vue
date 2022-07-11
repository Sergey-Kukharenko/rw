<template>
  <template v-if="loading">
    <template v-if="isDesktop" >
      <a class="logo">FLOR</a>
    </template>
    <teleport v-else to=".drawer__content">
      <a class="logo">FLOR</a>
    </teleport>
  </template>
</template>

<script setup>
import {useMq} from 'vue3-mq';

const mq = useMq();
const isDesktop = computed(() => mq.current !== 'xs');

const loading = ref(false);
onMounted(() =>  loading.value = true);
</script>

<style lang="scss" scoped>
.logo {
  font-family: $lora;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 0.7444;
  text-align: center;
  letter-spacing: 0.32em;
  cursor: pointer;

  @include xs {
    order: 0;
    padding: 8px;
    margin-right: auto;
  }
}
</style>
