<template>
  <div class="layout layout--horizontal">
    <div class="breadcrumbs">
      <a
        v-for="breadcrumb in breadcrumbs"
        :key="breadcrumb.text"
        class="breadcrumbs__item"
      >
        <SvgSprite
          symbol="arrow-left"
          class="breadcrumbs__icon"
          width="20"
          height="20"
        />
        {{ breadcrumb.text }}
      </a>
    </div>
  </div>
</template>

<script setup>
import dataBreadcrumbs from '@/data/breadcrumbs'

const breadcrumbs = ref(dataBreadcrumbs)
</script>

<style lang="scss" scoped>
.breadcrumbs {
  @include gt-xs {
    display: flex;
    padding: 11px 0;
  }

  @include xs {
    padding: 10px 6px;
  }

  &__item {
    font-family: $golos-regular;
    color: #7c7c7c;

    @include gt-xs {
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.01em;
    }

    @include xs {
      display: none;
      font-size: 11px;
      line-height: 16px;
    }

    &:hover {
      color: $color-dark-grey;
    }

    &:not(:last-child) {
      @include gt-xs {
        &:after {
          content: '';
          display: block;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 3px 0 3px 5px;
          border-color: transparent transparent transparent #ababab;
          margin: 0 10px;
        }
      }
    }

    &:nth-last-child(2) {
      @include xs {
        display: flex;
        align-items: center;
        color: $color-dark-grey;
      }
    }

    &:last-child {
      @include gt-xs {
        color: $color-dark-grey;
      }
    }
  }

  &__icon {
    fill: currentColor;

    @include gt-xs {
      display: none;
    }

    @include xs {
      display: block;
      margin-right: 1px;
    }
  }
}
</style>
