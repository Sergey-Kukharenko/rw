<template>
  <div class="list">
    <div
      v-for="(item, idx) in props.list"
      :key="idx"
      @click="handleClick(idx)"
      class="list__item"
    >
      <div class="figure">
        <SvgSprite
          v-if="item.icon"
          :symbol="item.icon"
          class="figure__icon"
          :class="item.icon"
        />
      </div>
      <div class="figcaption">{{ item.title }}</div>
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

const emit = defineEmits(['selectItem'])
const handleClick = (idx) => {
  emit('selectItem', idx)
}
</script>

<style lang="scss" scoped>
.list {
  transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;

  &__item {
    display: flex;
    align-items: center;
    padding: 7px 12px 6px;
  }
}

.content {
  &--active {
    .list {
      opacity: 0;
      transform: translateX(-40%);
    }
  }
}

.figure {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 18px;
  height: 18px;

  &__icon {
    width: 16px;
    height: 16px;

    &.relatives {
      width: 18px;
      height: 18px;
    }
  }
}

.figcaption {
  font-family: $golos-regular;
  font-size: 12px;
  line-height: 16px;
  margin-left: 8px;
}
</style>
