<template>
  <div class="reviews">
    <div :class="classNames" @click="sort()">
      <div class="button__figcaption">Popular {{ text }}</div>
      <div class="button__figure">
        <div class="button__icon"></div>
        <div class="button__icon"></div>
        <div class="button__icon"></div>
      </div>
    </div>

    <div class="reviews__list list">
      <div class="list__item" v-for="item in reviews" :key="item.name">
        <div class="card">
          <div class="card__header">
            <div class="figure" :style="item.style">
              <div class="figure__letter">
                {{ item.logo }}
              </div>
            </div>
            <div class="figcaption">
              <div class="figcaption__name">
                {{ item.name }}
              </div>
              <div class="figcaption__rating">
                <app-stars :stars="item.rating" />
              </div>
            </div>
          </div>
          <div class="card__body">
            {{ item.message }}
          </div>
          <div class="card__footer">
            <div class="date">
              {{ item.formatted_date }}
            </div>
            <app-like :like="item.like" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppStars from '@/components/shared/AppStars.vue'
import AppLike from '@/components/shared/AppLike.vue'

const props = defineProps({
  reviews: {
    type: Object,
    default: () => {},
  },
})

const reviews = ref(props.reviews)
const order = ref(false)
const text = ref('first')

const classNames = computed(() =>
  useToggleClassName(order.value, 'button', 'active')
)

const toggleText = () =>
  order.value ? (text.value = 'first') : (text.value = 'last')

const toggleOrder = () => (order.value = !order.value)

const sortArrayBy = (prop) =>
  reviews.value.sort((a, b) =>
    order.value ? a[prop] - b[prop] : b[prop] - a[prop]
  )

const sort = () => {
  toggleText()
  sortArrayBy('date')
  toggleOrder()
}
</script>

<style lang="scss" scoped>
.reviews {
  margin: 0;

  &__title {
    font-family: $Literata;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
  }

  &__list {
    margin: 6px 0;
  }
}

.list {
  &__item {
    padding: 32px 0;
    border-bottom: 1px solid #eaeaea;
  }
}

.card {
  &__header {
    display: flex;
  }

  &__body {
    font-family: $golos-regular;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin: 10px 0 0;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
  }
}

.figure {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;

  &__letter {
    font-family: $sans;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;
    color: #fff;
  }
}

.figcaption {
  flex: 1;
  margin-left: 12px;

  &__name {
    font-family: $Literata;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.01em;
    margin: 0;
  }

  &__rating {
    margin-top: 4px;
  }
}

.date,
.likes {
  font-family: $golos-regular;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
}

.date {
  color: #7e8895;
}

.button {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &__figcaption {
    font-family: $golos-bold;
    font-size: 16px;
    line-height: 20px;
    color: #000;
    margin-right: 10px;
  }

  &__figure {
    width: 12px;
    height: 10px;
    position: relative;
  }

  &__icon {
    position: absolute;
    height: 2px;
    background: $color-green;
    transition: width 0.1s ease 0s;

    &:nth-child(1) {
      width: 4px;
      left: 0;
      top: 0;
    }

    &:nth-child(2) {
      width: 8px;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto 0;
    }

    &:nth-child(3) {
      width: 12px;
      left: 0;
      bottom: 0;
    }
  }

  &--active {
    .button__icon {
      &:nth-child(1) {
        width: 12px;
      }

      &:nth-child(3) {
        width: 4px;
      }
    }
  }
}
</style>
