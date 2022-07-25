<template>
  <div class="list">
    <div
      class="list__item"
      v-for="(item, idx) in list"
      :key="item.id"
      @click="onChange(item, idx)"
    >
      <div class="card" :class="{ active: idx === selectedItem }">
        <div v-if="item.sale" class="badge" />
        <div class="card__figure figure">
          <img :src="item.img" class="figure__img" />
          <div class="figure__border" />
        </div>
        <div class="card__figcaption figcaption" v-if="item.description">
          <div class="figcaption__title">{{ item.name }}</div>
          <div class="figcaption__price">£{{ item.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['setItem'])
const selectedItem = ref(0)

const onChange = (item, idx) => {
  selectedItem.value = idx
  emit('setItem', item)
}
</script>

<style scoped lang="scss">
.list {
  display: flex;
  user-select: none;

  @include gt-sm {
    margin: 4px -8px;
  }

  @include lt-sm {
    margin: 8px 2px;
    overflow-x: auto;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__item {
    @include gt-sm {
      margin: 8px;
    }

    @include lt-sm {
      margin: 5px;
    }
  }
}

.card {
  cursor: pointer;
  position: relative;

  &__figure {
    width: 60px;
    height: 60px;
    position: relative;
    z-index: 1;
    border-radius: 12px;
  }

  &__figcaption {
    margin-top: 11px;
  }

  &:hover,
  &.active {
    .card__figcaption {
      color: $color-dark-grey;
    }

    .figure__img {
      transform: scale(0.98);
    }

    .figure__border {
      opacity: 1;
      transform: scale(1);
    }
  }
}

.figure {
  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease-out 0s;
  }

  &__border {
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    z-index: 2;
    border: 3px solid $color-green;
    border-radius: 12px;
    opacity: 0;
    transform: scale(1.1);
    transition: 0.3s ease-out 0s;
  }
}

.figcaption {
  font-size: 11px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: $color-white-grey;
  text-align: center;

  &__title {
    margin: 0;
  }

  &__price {
    margin-top: 1px;
  }
}

.badge {
  width: 24px;
  height: 24px;
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 3;
  background: #ffeec6;
  border-radius: 50%;
}
</style>
