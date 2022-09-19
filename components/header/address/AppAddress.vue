<template>
  <div class="container">
    <div class="container__header">
      <div class="container__layout">
        <h1>Address finder</h1>
      </div>
    </div>

    <div class="container__body">
      <div class="container__layout">
        <app-input v-model:query="query" />
        <app-list :list="list" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppInput from './AppInput'
import AppList from './AppList'
import { woosMapService } from '@/helpers/woosMapService'

const query = ref('')
const list = ref([])

watchEffect(async () => {
  list.value = query.value ? await woosMapService(query.value) : []
})
</script>

<style lang="scss" scoped>
.container {
  padding-top: 18px;
  box-sizing: border-box;

  &__layout {
    padding: 0 24px;
  }

  &__header {
    padding: 0 24px;
    border-bottom: 1px solid #dde0e6;
  }

  &__body {
    margin-top: 24px;
  }
}
</style>
