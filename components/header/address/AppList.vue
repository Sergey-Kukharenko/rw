<template>
  <div class="list-wrapper">
    <div class="list">
      <div
        class="list__item"
        v-for="(item, idx) in props.list"
        :key="idx"
        @click="onChange(item)"
      >
        <div class="title">{{ item.address }}</div>
        <div class="subtitle">{{ item.city }}</div>
      </div>
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

const { updateLocation } = inject('location')

const onChange = (item) => {
  updateLocation(item)
}
</script>

<style lang="scss" scoped>
.list-wrapper {
  position: relative;

  &:after {
    content: ' ';
    height: 32px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      180deg,
      transparent,
      hsl(0deg 0% 100% / 85%) 50%
    );
    z-index: 1;
  }
}

.list {
  height: 233px;
  overflow-y: auto;
  margin: 24px 0 0;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &__item {
    margin: 10px 0;
    cursor: pointer;
    background: #fff;
    border-radius: 10px;
    transition: background 0.2s ease 0s;

    &:hover {
      background: $bg-grey;

      & .title,
      & .subtitle {
        transform: translateX(16px);
      }
    }
  }

  &__item {
    &:first-child {
      margin-top: 0;
    }
  }

  &__item {
    &:last-child {
      margin-bottom: 24px;
    }
  }
}

.title,
.subtitle {
  font-family: $golos-regular;
  font-size: 16px;
  line-height: 22px;
  transform: translateX(0);
  transition: transform 0.2s ease 0.025s;

  &--grey {
    color: $color-white-grey;
  }
}

.subtitle {
  font-size: 14px;
  color: $color-white-grey;
  transition: transform 0.2s ease 0.05s;
}
</style>
