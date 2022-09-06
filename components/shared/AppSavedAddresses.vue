<template>
  <div class="list">
    <div class="list__item" v-for="(item, idx) in props.list" :key="item">
      <div class="item">
        <label class="item__label label" :for="idx">
          <input
            type="radio"
            :value="item"
            :id="idx"
            @change="onChange(item)"
            :checked="item === selected"
          />
          <div
            class="label__button"
            :class="{ active: item === selected }"
          ></div>

          <div class="label__text">
            {{ item }}
          </div>
        </label>

        <div class="item__edit">
          <SvgSprite symbol="pencil" width="16" height="16" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  selected: {
    type: String,
    required: true
  },

  list: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['update:selected'])

const onChange = (item) => {
  emit('update:selected', item)
}
</script>

<style lang="scss" scoped>
.list {
  background: #ffffff;
  padding: 0 16px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  border-radius: 10px;

  &__item {
    padding: 18px 0;
  }

  &__item:not(:last-child) {
    border-bottom: 1px solid #dde0e6;
  }
}

input {
  display: none;
}

.item {
  display: flex;
  align-items: center;

  &__label {
    flex: 1;
  }
}

.label {
  display: flex;
  align-items: center;

  &__button {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    border: 1px solid #dde0e6;
    border-radius: 6px;
    box-sizing: border-box;

    &.active {
      background: $color-dark-green;
      border-color: $color-dark-green;
    }
  }

  &__text {
    flex: 1;
    font-family: $golos-regular;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    padding: 0 14px;
  }
}
</style>
