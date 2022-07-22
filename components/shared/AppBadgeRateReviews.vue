<template>
  <div :class="classNames">
    <div class="rating">
      <div class="rating__number">{{ rating }}</div>
      <div class="stars">
        <SvgSprite
          v-for="star in stars"
          :key="star"
          symbol="star"
          class="stars__icon"
        />
      </div>
    </div>
    <div class="reviews" v-if="reviews">
      <div class="reviews__number">
        {{ reviews }}
      </div>
      <div class="reviews__text">reviews</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  rating: {
    type: Number,
    default: 5,
  },
  stars: {
    type: Number,
    default: 1,
  },
  reviews: {
    type: Number,
    required: true,
  },
  options: {
    type: Object,
    default: () => ({}),
  },
})

const classNames = computed(() => useClassName(props.options, 'badge'))
</script>

<style lang="scss" scoped>
.badge {
  display: flex;
  align-items: center;

  @include gt-xs {
    padding: 4px 8px;
    background: rgba(0, 0, 0, 0.26);
    border-radius: 8px;
  }

  &--full {
    padding: 4px 8px;
    background: rgba(0, 0, 0, 0.26);
    border-radius: 8px;

    .rating {
      &__number {
        @include xs {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }

    .stars {
      margin-left: 6.34px;

      &__icon {
        height: 15.49px;
        width: 15.49px;
      }
    }
  }
}

.rating {
  display: flex;
  align-items: center;

  &__number {
    font-family: $golos-regular;
    letter-spacing: -0.01em;
    color: #fff;

    @include gt-xs {
      font-size: 11px;
      line-height: 16px;
    }

    @include xs {
      font-size: 10px;
      line-height: 12px;
    }
  }
}

.stars {
  display: flex;
  align-items: center;

  @include gt-xs {
    margin-left: 6.34px;
  }

  @include xs {
    margin-left: 2.24px;
  }

  &__icon {
    display: block;

    @include gt-xs {
      width: 13.32px;
      height: 12.66px;
    }

    @include xs {
      width: 10px;
      height: 10px;

      @include xs {
        &:not(:first-child) {
          display: none;
        }
      }
    }
  }
}

.reviews {
  display: flex;
  align-items: center;
  font-family: $golos-regular;
  font-size: 12px;
  line-height: 16px;
  color: #fff;
  letter-spacing: 0.01em;
  opacity: 0.5;
  margin-left: 6.34px;

  &__text {
    margin-left: 4px;
  }
}
</style>
