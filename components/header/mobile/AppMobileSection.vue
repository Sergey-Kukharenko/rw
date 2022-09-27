<template>
  <div :class="classNames">
    <div class="section__header header" @click="isVisible = !isVisible">
      <div class="header__title">
        {{ props.section.title }}
      </div>
      <SvgSprite symbol="arrow-down" class="header__icon"/>
    </div>
    <div class="section__list list">
      <a v-for="item in props.section.list" :key="item" class="list__item">
        {{ item.text }}
        <span v-if="item.from" class="text-grey">{{ item.from }}</span>
      </a>
    </div>
    <a v-if="isLink" class="section__link">{{props.section.link.text}}</a>
  </div>
</template>

<script setup>
const props = defineProps({
  section: {
    type: Object,
    default: () => ({})
  }
});

const isVisible = ref(true);
const classNames = computed(() =>
  useToggleClassName(isVisible.value, 'section', 'active')
);

const isLink = computed(() => props.section?.link?.text)
</script>

<style lang="scss" scoped>
.section {
  margin: 16px 0;

  &__link {
    display: block;
    font-family: $golos-regular;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: $color-dark-green;
    margin-bottom: 15px;
  }

  &--active {
    & .header__icon {
      transform: rotate(180deg);
    }

    & .list {
      display: block;
    }
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__title {
    font-family: $golos-bold;
    font-size: 14px;
    line-height: 16px;
  }

  &__icon {
    display: block;
    width: 12px;
    height: 16px;
    transition: transform 0.2s ease 0s;
  }
}

.list {
  display: none;
  margin: 5px 0;

  &__item {
    display: block;
    font-family: $golos-regular;
    font-size: 14px;
    line-height: 20px;
    color: $color-dark-grey;
    padding: 6px 0;
  }
}

.text-grey {
  color: $color-white-grey;
}
</style>
