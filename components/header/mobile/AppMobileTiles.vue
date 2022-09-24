<template>
  <div :class="classNames">
    <div v-for="(item, idx) in props.list" :key="idx" class="list__item">
      <div class="figure">
        <SvgSprite
          :symbol="item.icon"
          class="figure__icon"
          :class="item.icon"
        />
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
  },

  options: {
    type: Object,
    default: () => ({})
  }
})

const classNames = computed(() => useClassName(props.options, 'list'))
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 9px;
  margin: 9px 0;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    text-align: center;
    background: #f7f7f7;
    border-radius: 10px;
    padding: 11px 5px;
    box-sizing: border-box;
  }

  &--outline {
    & .list__item {
      background: #ffffff;
      border: 1px solid #e8e8e8;
    }
  }
}

.figure {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 24px;
  height: 24px;

  &__icon {
    width: 24px;
    height: 24px;
  }
}

.figcaption {
  display: flex;
  align-items: center;
  max-width: 58px;
  min-height: 26px;
  margin: 2px auto 0;
  font-family: $golos-regular;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.066px;
}
</style>
