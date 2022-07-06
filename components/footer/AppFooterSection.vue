<template>
  <div :class="classNames">
    <div class="section__title" @click="toggle">
      {{ props.section.title }}
    </div>
    <div class="section__list list">
      <a class="list__item" v-for="item in props.section.list" :key="item">
        {{ item.name }}
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  section: {
    type: Object,
    default: () => ({}),
  },
});

const visibility = ref(false);
const toggle = () => (visibility.value = !visibility.value);
const classNames = computed(() => useToggleClassName(visibility.value, 'section', 'active'));
</script>

<style lang="scss" scoped>
.section {
  @include xs {
    padding: 13px 0;
    border-top: 1px solid #e5e5e5;
  }

  &__title {
    font-family: $golos-bold;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.03px;
  }

  &__list {
    margin-top: 14px;

    @include xs {
      display: none;
    }
  }

  &--active {
    & .list {
      @include xs {
        display: block;
      }
    }
  }
}

.list {
  &__item {
    display: block;
    font-family: $golos-regular;
    font-size: 15px;
    line-height: 24px;
    padding: 8px 0;
  }
}

</style>
