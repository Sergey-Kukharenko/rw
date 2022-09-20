<template>
  <div class="list">
    <div class="list__item" v-for="(item, idx) in props.list" :key="idx">
      <span @click="add(item)" class="text">{{ item }}</span>
      <SvgSprite
        v-if="hasRemoveBtn"
        symbol="close"
        class="button"
        @click="remove(item)"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  },

  hasRemoveBtn: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['addItem', 'removeItem'])

const add = (item) => emit('addItem', item)

const remove = (item) => emit('removeItem', item)
</script>

<style lang="scss" scoped>
.list {
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: $golos-regular;
    font-size: 16px;
    line-height: 24px;
    color: $color-dark-grey;
    padding: 4px 8px;
    user-select: none;
    cursor: pointer;

    &:hover {
      background: $bg-grey;
      border-radius: 10px;
    }
  }
}

.button {
  width: 10px;
  height: 10px;
  padding: 4px;
  margin-left: 10px;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.2s ease-out 0s, transform 0.2s ease-out 0s;

  &:hover {
    opacity: 1;
    transform: scale(1);
  }
}

.text {
  flex: 1;
}
</style>
