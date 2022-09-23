<template>
  <div class="list">
    <div
      v-for="(item, idx) in props.list"
      :key="idx"
      @click="handleClick(idx)"
      class="list__item"
    >
      <div class="figure">
        <SvgSprite :symbol="item.icon" class="figure__icon" :class="item.icon" />
      </div>
      <div class="figcaption">{{ item.text }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
.list {
  transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;

  &__item {
    display: flex;
    align-items: center;
    padding: 5px 0;
  }
}

.figure{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 24px;
  height: 24px;
  //outline: 1px solid;

  &__icon {
    width: 20px;
    height: 20px;

    &.relatives {
      width: 22px;
      height: 22px;
    }
  }
}

.figcaption {
  font-family: $golos-regular;
  font-size: 12px;
  line-height: 16px;
  margin-left: 6px;
}
</style>
