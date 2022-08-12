<template>
  <nav class="navigation">
    <div class="layout layout--horizontal-dt">
      <div class="navigation__group">
        <app-navigation-list :list="navigation.main"/>
        <div class="navigation__section">
          <app-navigation-list
            :list="navigation.other"
            :options="{ theme: 'mixed' }"
          >
            <app-call/>
          </app-navigation-list>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import dataNavigation from '@/data/navigation';
import AppNavigationList from '@/components/header/AppNavigationList.vue';
import AppCall from '@/components/header/AppCall.vue';

const navigation = ref(dataNavigation);
</script>

<style lang="scss" scoped>
.navigation {
  @include gt-md {
    background: $bg-grey;
  }

  @include lt-md {
    order: 2;
    border-top: 1px solid #dde0e6;
  }

  &__group {
    @include gt-sm {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__section {
    @include gt-sm {
      display: flex;
      align-items: center;
    }
  }
}
</style>
