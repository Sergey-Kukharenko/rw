<template>
  <a class="call" :href="call.href">
    <SvgSprite symbol="call-outline" class="call__icon" v-if="isDevice"/>

    <div class="content" v-else>
      <div class="content__figure" v-if="call.icon">
        <SvgSprite
          :symbol="call.icon.desktop"
          class="content__icon"
        />
      </div>
      <div class="content__text">
        {{ call.title }}
      </div>
    </div>
  </a>
</template>

<script setup>
import dataNavigation from '@/data/navigation';
import {useIsDevice} from '@/composables/states';

const {call} = dataNavigation;
const isDevice = useIsDevice();
</script>

<style lang="scss" scoped>
.call {
  @include lt-md {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
  }

  &__icon {
    @include lt-md {
      width: 20px;
      height: 20px;
      fill: $color-dark-grey;
    }
  }
}

.content {
  display: flex;
  align-items: center;
  justify-content: flex-start;


  @include lt-md {
    margin: 0;
  }

  &__icon {
    display: block;
    width: 16px;
    height: 16px;
    color: inherit;
    fill: currentColor;

    @include gt-sm {
      margin-right: 7px;
    }
  }

  &__text {
    font-size: 14px;
    line-height: 24px;
    color: $color-dark-grey;

    &:hover {
      color: lighten($color-dark-grey, 20%);
    }
  }
}

</style>
