<template>
  <div class="menu-navigation-list">
    <div
      v-for="item in props.list"
      :key="item.title"
      class="menu-navigation-list__item"
      :class="{'has-sub-level': item.hasSubLevel}"
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

      <div v-if="item.hasSubLevel" class="dropdown">

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
});
</script>

<style lang="scss" scoped>
.menu-navigation-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -12px;

  &__item {
    cursor: default;
    background: #FFFFFF;
    padding: 0;
    border-radius: 12px 12px 0 0;

    &:hover {
      color: lighten($color-dark-green, 5%);
    }

    &.has-sub-level{
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
      //box-shadow: 0 4px 16px rgb(0 0 0 / 12%);
      //z-index: 3;
      //
      //& .dropdown {
      //  display: block;
      //}

      & .content {
        z-index: 2;
      }

      &:not(:hover) {
        color: $color-dark-green;
      }
    }

    &:last-of-type {
      &:not(:hover) {
        color: #F63866;
      }
    }
  }
}

.content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: #FFFFFF;
  padding: 8px 16px 12px;
  border-radius: 12px 12px 0 0;
  z-index: 2;

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

  &__text{
    font-family: $golos-medium;
    font-size: 14px;
    line-height: 20px;
  }
}

.dropdown {
  display: none;
  width: 100%;
  position: absolute;
  left: 0;
  height: 312px;
  background: #FFFFFF;
  box-shadow: 0 4px 16px #0000001f;
  border-radius: 16px;
  z-index: 1;
}
</style>
