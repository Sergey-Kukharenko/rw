<template>
  <div class="multiply-navigation">
    <div class="layout layout--horizontal-dt">
      <div class="multiply-navigation-list">
        <div class="multiply-navigation-list__item">
          <app-logo />
        </div>
        <div class="multiply-navigation-list__item">
          <app-location />
        </div>
        <div class="multiply-navigation-list__item">
          <app-informer />
        </div>
        <div class="multiply-navigation-list__item">
          <app-navigation-user />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppLogo from '@/components/header/AppLogo.vue'
import AppLocation from '~~/components/header/location/AppLocation.vue'
import AppInformer from '@/components/header/AppInformer.vue'
import AppNavigationUser from '@/components/header/AppNavigationUser'
</script>

<style lang="scss" scoped>
.multiply-navigation {
  @include gt-sm {
    position: relative;
    z-index: 5;
    padding: 24px 0 20px;
    border-bottom: 1px solid #e5e5e5;
  }
}

.multiply-navigation-list {
  @include md {
    margin: 0 -8px;
  }

  @include gt-sm {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 -16px;
  }

  &__item {
    @include gt-md {
      padding: 0 16px;
    }

    @include md {
      margin: 0 8px;
    }

    @include sm {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1 1 50%;
      margin: 8px 0;
    }

    @include lt-md {
      margin: 0;
    }

    &:first-child {
      @include lt-sm {
        display: none;
      }
    }

    &:last-child {
      @include gt-sm {
        margin-left: auto;
      }
    }
  }
}
</style>
