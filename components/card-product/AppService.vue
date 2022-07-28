<template>
  <div class="service">
    <div class="service__list list">
      <div class="list__item card" v-for="item in service.list" :key="item">
        <div class="card__container"></div>
        <div class="card__title">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  service: {
    type: Object,
    default: () => {},
  },
})
</script>

<style lang="scss" scoped>
.list {
  @include gt-sm {
    display: flex;
    margin: -4px;
  }

  &__item {
    background: #ffeec6;
    border-radius: 16px;

    @include gt-sm {
      width: 170.67px;
      height: 164px;
      margin: 4px;
    }

    @include lt-md {
      margin: 4px 0;
    }
  }
}

.card {
  display: flex;

  @include gt-sm {
    flex-direction: column;
  }

  @include lt-md {
    flex-direction: row;
    justify-content: space-between;
  }

  &__container {
    background: hsl(0deg 0% 100% / 60%);

    @include gt-sm {
      flex: 1;
    }

    @include lt-md {
      order: 1;
      width: 124px;
    }
  }

  &__title {
    font-family: $golos-bold;
    font-size: 13px;
    line-height: 16px;
    color: $color-dark-grey;

    @include gt-sm {
      flex-shrink: 0;
      max-width: 130px;
      padding: 16px;
    }

    @include lt-md {
      width: 170px;
      padding: 12px;
    }
  }
}
</style>
