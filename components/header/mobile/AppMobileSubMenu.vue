<template>
  <div class="list">
    <div
      v-for="(item, idx) in props.list"
      :key="idx"
      class="list__item"
    >
      <SvgSprite :symbol="item.icon" class="icon"/>
      <div class="text">{{ item.text }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
});
</script>

<style lang="scss" scoped>
.list {
  transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;

  &__item {
    display: flex;
    align-items: center;
    padding: 12px;
  }
}

.icon {
  width: 16px;
  height: 16px;
}

.text {
  font-size: 12px;
  line-height: 16px;
  margin-left: 10px;
}
</style>
