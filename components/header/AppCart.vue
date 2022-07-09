<template>
  <a class="card cart">
    <figure class="card__figure">
      <SvgSprite symbol="cart" class="card__icon" width="24" height="24"/>
    </figure>
    <figcaption class="card__figcaption cart__figcaption">Basket</figcaption>
  </a>
</template>

<style lang="scss" scoped>
.card {
  cursor: pointer;

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin: 0 auto;
  }

  &__icon {
    fill: $color-light-grey;
  }

  &__figcaption {
    font-family: $golos-medium;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: $color-white-grey;
    margin-top: 7px;
  }

  &:hover {
    opacity: 0.75;
  }
}
</style>
