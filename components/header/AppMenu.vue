<template>
  <div class="menu">
    <div class="layout layout--horizontal-dt">
      <div class="menu-list">
        <div class="menu-list__item">
          <app-logo/>
        </div>
        <div class="menu-list__item">
          <app-location/>
        </div>
        <div class="menu-list__item">
          <app-informer/>
        </div>
        <div class="menu-list__item">
          <app-navigation-user/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppLogo from '@/components/header/AppLogo.vue';
import AppLocation from '@/components/header/AppLocation.vue';
import AppInformer from '@/components/header/AppInformer.vue';
import AppNavigationUser from '@/components/header/AppNavigationUser';
</script>

<style lang="scss" scoped>
.menu {
  //background: palegoldenrod;

  @include gt-xs {
    padding: 24px 0 20px;
    border-bottom: 1px solid #e5e5e5;
  }
}

.menu-list {
  @include gt-xs {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  @include gt-md {
    margin: 0 -16px;
  }

  @include md {
    margin: 0 -8px;
  }

  @include xs {

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

    @include xs {
      margin: 6px;
    }

    &:last-child {
      @include gt-sm {
        margin-left: auto;
      }
    }
  }
}


</style>
