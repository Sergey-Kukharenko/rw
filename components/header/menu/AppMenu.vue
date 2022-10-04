<template>
  <div class="menu">
    <div
      v-for="item in props.list"
      :key="item.title"
      class="menu__item"
      :class="{ 'has-sub-level': item.hasSubLevel }"
    >
      <div class="content">
        <div class="content__figure">
          <SvgSprite
            :symbol="item.icon"
            v-bind:="item.style"
            :class="['content__icon', item.icon]"
          />
        </div>
        <div class="content__text">
          {{ item.title }}
        </div>
      </div>

      <app-menu-dropdown v-if="item.hasSubLevel">
        <app-menu-sections :section="item.by" v-slot="slotProps">
          <app-menu-section
            :theme="setColumnSize(item.title)"
            :section="{ ...slotProps }"
          />
        </app-menu-sections>
      </app-menu-dropdown>
    </div>
  </div>
</template>

<script setup>
import AppMenuDropdown from './AppMenuDropdown'
import AppMenuSections from './AppMenuSections'
import AppMenuSection from './AppMenuSection'

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

const setColumnSize = (value) => {
  switch (value) {
    case 'Flowers':
      return 'md'
    case 'Roses':
      return 'lg'
    default:
      return ''
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -12px;

  &__item {
    cursor: default;
    background: #ffffff;
    padding: 0;
    border-radius: 12px 12px 0 0;

    &:hover {
      color: lighten($color-dark-green, 5%);
    }

    &.has-sub-level {
      &:hover {
        color: $color-dark-green;
        box-shadow: 0 4px 16px #0000001f;
        z-index: 3;

        & .dropdown {
          display: block;
        }
      }
    }

    &:first-child {
      &:not(:hover) {
        color: $color-dark-green;
      }
    }

    &:last-of-type {
      &:not(:hover) {
        color: #f63866;
      }
    }
  }
}

.content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: #ffffff;
  padding: 8px 16px 13px;
  border-radius: 12px 12px 0 0;
  z-index: 2;
  cursor: pointer;

  &__icon {
    display: block;
    color: inherit;
    fill: currentColor;
  }

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  &__text {
    font-family: $golos-medium;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
