<template>
  <div class="list">
    <a
      :href="item.href"
      target="_blank"
      class="list__item"
      v-for="item in list"
      :key="item.title"
    >
      <div class="content">
        <SvgSprite v-if="item.icon" :symbol="item.icon" class="content__icon" />
        <div class="content__text">
          {{ item.title }}
        </div>
        <div v-if="item.count" class="content__count">
          {{ item.count }}
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
})
</script>

<style lang="scss" scoped>
.list {
  @include gt-xs {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 -12px;
  }

  @include xs {
    margin: 0;
  }

  &__item {
    display: block;
    margin: 0;
    color: $color-dark-grey;
    font-size: 14px;
    line-height: 24px;

    @include gt-xs {
      padding: 0 12px;
    }

    @include xs {
      padding: 0 6px;
    }
  }
}

.content {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @include xs {
    margin: 0;
  }

  &__icon {
    display: block;
    width: 16px;
    height: 16px;
    margin-right: 7px;
  }

  &__count {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #7c7c7c;

    &::before {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      background: currentColor;
      border-radius: 50%;
      margin: 0 4px;
    }
  }
}
</style>
