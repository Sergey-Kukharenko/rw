<template>
  <a class="cart">
    <figure class="cart__figure">
      <SvgSprite
        symbol="cart-outline"
        class="cart__icon"
      />
    </figure>
    <figcaption class="cart__figcaption">
      Basket
    </figcaption>
  </a>
</template>

<style lang="scss" scoped>
.cart {
  cursor: pointer;

  @include lt-md {
    display: flex;
    align-items: center;
    justify-content: center;
    order: 4;
    padding: 8px;
  }

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin: 0 auto;
  }

  &__icon {
    @include gt-sm {
      width: 24px;
      height: 24px;
      fill: $color-dark-grey;
      opacity: 0.5;
    }
    @include lt-md {
      width: 20px;
      height: 20px;
      fill: white;
    }
  }

  &__figcaption {
    @include gt-sm {
      font-family: $golos-medium;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: $color-white-grey;
      margin-top: 7px;
    }
    @include lt-md {
      display: none;
    }
  }

  &:hover {
    @include gt-sm {
      opacity: 0.75;
    }
  }
}
</style>
