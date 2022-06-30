<template>
  <nav class="navigation-user">
    <a class="navigation-user__item" v-for="item in navUser" :key="item.name">
      <div class="cart">
        <div class="cart__figure">
          <SvgSprite
            :symbol="item.name"
            v-bind:="{ ...item.style }"
            class="cart__icon"
          />
        </div>
        <figcaption class="cart__figcaption">
          {{ item.title }}
        </figcaption>
      </div>
    </a>
  </nav>
</template>

<script setup>
const navUser = ref([
  {
    style: {
      width: 20,
      height: 18.5,
    },
    name: 'hart',
    title: 'Favorite',
  },
  {
    style: {
      width: 24,
      height: 24,
    },
    name: 'cart',
    title: 'Basket',
  },
  {
    style: {
      width: 26.45,
      height: 24,
    },
    name: 'profile',
    title: 'Log in / Register',
  },
])
</script>

<style lang="scss" scoped>
.navigation-user {
  display: flex;
  align-items: center;
  margin: 0 -32px;

  &__item {
    padding: 0 32px;
  }
}

.cart {
  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin: 0 auto;
  }

  &__icon {
    fill: #979797;
  }

  &__figcaption {
    font-family: $golos-medium;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: $color-white-grey;
    margin-top: 7px;
  }
}
</style>
