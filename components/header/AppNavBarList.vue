<template>
  <div class="navbar-list">
    <a
      :href="item.href"
      target="_blank"
      class="navbar-list__item"
      v-for="item in list"
      :key="item.title"
    >
      <div class="content" :style="'color: ' + item.style.color">
        <div class="content__figure">
          <SvgSprite
            :style="item.style"
            :symbol="item.icon"
            class="content__icon"
          />
        </div>
        <div class="content__figcaption">
          {{ item.title }}
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
});
</script>

<style lang="scss" scoped>
.navbar-list {
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
    @include gt-xs {
      padding: 10px 12px;
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

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: 8px;

    @include xs {
      margin: 0;
    }
  }

  &__icon {
    display: block;
    color: inherit;
    fill: currentColor;
  }

  &__figcaption {
    font-family: $golos-regular;
    font-size: 14px;
    line-height: 24px;
  }
}
</style>
