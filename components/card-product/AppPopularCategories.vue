<template>
  <section class="popular-categories">
    <h2 class="popular-title">{{ props.popular.title }}</h2>
    <div class="popular-list">
      <a
        v-for="item in props.popular.categories"
        :key="item.name"
        class="popular-list__item"
      >
        {{ item.name }}
      </a>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  popular: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped lang="scss">
.popular-categories {
  overflow: hidden;
}

.popular-title {
  margin: 0;
}

.popular-list {
  display: flex;
  flex-wrap: wrap;
  margin: 16px -8px;

  &__item {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: $color-dark-grey;
    padding: 8px 16px;
    margin: 8px;
    background: $bg-grey;
    border-radius: 10px;

    @include gt-sm {
      margin: 8px;

      &:hover {
        background: darken($bg-grey, 10%);
      }
    }

    @include lt-sm {
      margin: 4px;
    }
  }
}
</style>
