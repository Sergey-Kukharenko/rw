<template>
  <div class="sizes">
    <div
      class="sizes__item item"
      v-for="(item, idx) in sizes"
      :key="item.id"
      @click="onChange(item, idx)"
    >
      <div class="button" :class="{ active: idx === selectedSize }">
        <div class="figure">
          <div class="radio">
            <div class="radio__shape"></div>
          </div>
          <div class="figcaption">
            {{ item.title }}
          </div>
        </div>
        <div class="price">
          {{ item.formatted_price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sizes: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['setSize'])
const selectedSize = ref(0)

const onChange = (item, idx) => {
  selectedSize.value = idx
  emit('setSize', item)
}
</script>

<style lang="scss" scoped>
.sizes {
  margin: 12px 0;

  &__item {
    width: 100%;
    margin: 6px 0;
  }
}

.button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  height: 44px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  box-sizing: border-box;
  transition: border 0.2s ease-out 0s;
  cursor: pointer;
  user-select: none;

  &.active,
  &:hover {
    border: 1px solid $color-green;

    .radio {
      border: 1px solid $color-green;

      &__shape {
        opacity: 1;
      }
    }
  }
}

.figure {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.figcaption {
  flex: 1;
  font-family: $golos-regular;
  font-size: 16px;
  line-height: 24px;
  margin-left: 14px;
}

.radio {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  transition: border 0.2s ease-out 0s;

  &__shape {
    width: 10px;
    height: 10px;
    background: $color-green;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.2s ease-out 0s;
  }
}

.price {
  font-family: $golos-medium;
  font-size: 16px;
  line-height: 24px;
  color: #1f2226;
  margin-right: 38px;
}
</style>
