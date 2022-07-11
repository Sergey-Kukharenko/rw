<template>
  <a class="card favorite">
    <div class="card__figure">
      <SvgSprite
        symbol="hart"
        class="card__icon"
        width="20"
        height="18.5"
      />
    </div>
    <figcaption class="card__figcaption">Favorite</figcaption>
  </a>
</template>

<style lang="scss" scoped>
.card {
  cursor: pointer;

  @include xs {
    display: none;
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
