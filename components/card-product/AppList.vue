<template>
  <div class="list">
    <div class="list__item" v-for="item in list" :key="item.id">
      <div class="card">
        <div class="card__figure figure" v-if="item.name">
          <img :src="item.img" class="figure__img" :alt="item.name">
          <div class="figure__border"/>
        </div>
        <div class="card__figcaption figcaption" v-if="item.description">
          <div class="figcaption__title">{{ item.title }}</div>
          <div class="figcaption__price">£{{ item.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped lang="scss">
.list {
  display: flex;
  margin: 4px -8px;

  &__item {
    margin: 8px;
  }
}

.card {
  cursor: pointer;

  &__figure {
    width: 60px;
    height: 60px;
    position: relative;
    z-index: 1;
    border-radius: 12px;
  }

  &__figcaption {
    margin-top: 11px;
  }

  &:hover {
    .card__figcaption {
      color: $color-dark-grey;
    }

    .figure__img{
      transform: scale(0.98);
    }

    .figure__border{
      opacity: 1;
      transform: scale(1);
    }
  }
}

.figure {
  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease-out 0s;
  }

  &__border {
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    z-index: 2;
    border: 3px solid $color-green;
    border-radius: 12px;
    opacity: 0;
    transform: scale(1.1);
    transition: 0.3s ease-out 0s;
  }
}

.figcaption {
  font-size: 11px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: $color-white-grey;
  text-align: center;

  &__title {
    margin: 0;
  }

  &__price {
    margin-top: 1px;
  }
}
</style>
