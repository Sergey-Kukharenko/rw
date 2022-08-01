<template>
  <div class="reviews">
    <h2 class="reviews__title">
      {{ props.reviews.title }}
    </h2>

    <button @click="sort()">{{ order }}</button>

    <div class="reviews__list list">
      <div class="list__item" v-for="item in list" :key="item.name">
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

const order = ref(false)
const list = ref(props.reviews.list)

console.log(list.value)

const sort = () => {
  order.value = !order.value
  console.log(order.value);
  list.value.sort(function (a, b) {
    return order.value ? b.date - a.date : a.date - b.date
  })
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
    margin: 0;
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
</style>
