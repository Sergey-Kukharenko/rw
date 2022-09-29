<template>
  <div class="cities">
    <div class="cities__title">Or choose from the popular</div>
    <div class="cities__list list">
      <div
        class="list__item"
        v-for="(item, idx) in list"
        :key="idx"
        @click="onChange(item)"
      >
        {{ item.city }}
      </div>
    </div>
  </div>
</template>

<script setup>
import dataCities from '@/data/cities-by-default'
const list = ref(dataCities)

const emit = defineEmits(['clearQuery'])
const { updateLocation } = inject('location')

const onChange = ({ address, city }) => {
  emit('clearQuery')
  updateLocation({ address, city })
}
</script>

<style lang="scss" scoped>
.cities {
  margin: 20px 0;

  &__title {
    font-family: $golos-regular;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: $color-white-grey;
  }

  &__list {
    margin: 4px 0;
  }
}

.list {
  &__item {
    font-family: $golos-regular;
    font-size: 14px;
    line-height: 20px;
    padding: 6px 0;
    background: #fff;
    cursor: pointer;
  }
}
</style>
