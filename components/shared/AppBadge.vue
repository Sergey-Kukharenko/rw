<template>
  <div :class="classNames">
    <SvgSprite v-if="icon" :symbol="icon" class="icon" />
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  theme: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
})

const classNames = computed(() => useClassName(props, 'badge'))
</script>

<style lang="scss" scoped>
.badge {
  display: flex;
  align-items: center;
  font-family: $golos-regular;
  letter-spacing: -0.01em;
  color: #ffffff;
  padding: 2px 6px;
  background: #343434;
  border-radius: 8px;

  @include gt-xs {
    font-size: 11px;
    line-height: 16px;
  }

  @include xs {
    font-size: 8px;
    line-height: 10px;
    padding: 2px 4.4555px;
  }

  &--red {
    background: #db1838;
  }

  &--yellow {
    color: $color-dark-grey;
    background: #ffeec6;

    .icon{
      width: 14px;
      height: 12px;
    }
  }

  &--md {
    font-size: 12px;
    line-height: 16px;

    @include gt-xs {
      padding: 4px 9px;
    }

    @include xs {
      padding: 4px 8px;
    }
  }
}

.icon{
  display: block;
  width: 14px;
  height: 14px;
  margin-right: 6px;
}
</style>
