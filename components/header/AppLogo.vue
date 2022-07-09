<template>
  <template v-if="loading">
    <template v-if="isDesktop" >
      <div class="logo">FLOR</div>
    </template>
    <teleport v-else to=".drawer__content">
      <div class="logo">FLOR</div>
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
}
</style>
