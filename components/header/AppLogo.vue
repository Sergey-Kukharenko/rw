<template>
  <div v-if="isLoading">
    <teleport v-if="isDevice" :to="DRAWER_CONTENT_ID">
      <a class="logo">FLOR</a>
    </teleport>
    <template v-else>
      <a class="logo">FLOR</a>
    </template>
  </div>
</template>

<script setup>
import { useMq } from 'vue3-mq'
import { DRAWER_CONTENT_ID } from '@/constants'

const mq = useMq()
const isDevice = computed(() => mq.current === 'xs' || mq.current === 'sm')

const isLoading = ref(false)
onMounted(() => isLoading.value = true)
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

  @include lt-md {
    order: 0;
    padding: 8px;
    margin-right: auto;
  }
}
</style>
