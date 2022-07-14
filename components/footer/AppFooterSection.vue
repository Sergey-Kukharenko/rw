<template>
  <div :class="classNames">
    <div class="section__title" @click="isVisibility = !isVisibility">
      {{ props.section.title }}
    </div>
    <div class="section__list list">
      <a v-for="item in props.section.list" :key="item" class="list__item">
        {{ item.name }}
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  section: {
    type: Object,
    default: () => ({})
  }
})

const isVisibility = ref(false)
const classNames = computed(() =>
  useToggleClassName(isVisibility.value, 'section', 'active')
)
</script>

<style lang="scss" scoped>
.section {
  @include xs {
    padding: 13px 0;
    border-top: 1px solid #e5e5e5;
  }

  &__title {
    font-family: $golos-bold;
    letter-spacing: 0.03px;

    @include gt-xs {
      font-size: 20px;
      line-height: 24px;
    }

    @include xs {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      cursor: pointer;

      &:after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 4px 0 4px;
        border-color: $color-dark-grey transparent transparent transparent;
      }
    }
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
        display: flex;
        flex-wrap: wrap;
      }

      &__item {
        @include xs {
          flex: 1 1 30%;

          &:nth-child(3n + 2) {
            text-align: center;
          }

          &:nth-child(3n + 3) {
            text-align: right;
          }
        }
      }
    }
  }
}

.list {
  &__item {
    display: block;
    font-family: $golos-regular;

    @include gt-xs {
      font-size: 15px;
      line-height: 24px;
      padding: 8px 0;
    }

    @include xs {
      font-size: 12px;
      line-height: 16px;
      padding: 4px 0;
    }
  }
}
</style>
