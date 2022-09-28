<template>
  <div class="list">
    <a class="list__item" v-for="item in navigation.main" :key="item.title">
      {{item.title}}
      <span v-if="item.count" class="count">
        {{ item.count }}
      </span>
    </a>
  </div>
</template>

<script setup>
import dataNavigation from '@/data/navigation';
const navigation = ref(dataNavigation);
</script>

<style lang="scss" scoped>
.list {
  padding-top: 20px;
  margin-top: 16px;
  border-top: 1px solid #dde0e6;

  &__item {
    display: flex;
    font-family: $golos-regular;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.02em;
    color: $color-dark-grey;
    padding: 6px 12px 6px;
  }
}

.count{
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-white-grey;

  &::before {
    content: '';
    display: block;
    width: 4px;
    height: 4px;
    background: currentColor;
    border-radius: 50%;
    margin: 0 4px;
  }
}
</style>
