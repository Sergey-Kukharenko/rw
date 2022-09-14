<template>
  <div class="container">
    <div class="container__header">
      <div class="avatar">
        <div class="avatar__figure">{{ char }}</div>
        <div class="avatar__figcaption">{{ user.fullName }}</div>
      </div>
    </div>
    <div class="container__body">
      <div class="list">
        <div v-for="item in settings" :key="item" class="list__item">
          <SvgSprite :symbol="item.icon" :class="item.name" class="icon" />
          <div class="text">{{ item.text }}</div>
          <app-badge
            v-if="item.name === 'bonuses'"
            theme="yellow"
            size="sm"
            icon="cashback"
            class="badge"
          >
            {{ user.bonuses }}
          </app-badge>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppBadge from '@/components/shared/AppBadge.vue'
import dataUser from '@/data/user'

const user = ref(dataUser)
const char = computed(() => user.value.fullName.substring(0, 1))

const settings = [
  {
    icon: 'bonuses-black',
    text: 'Your bonuses',
    name: 'bonuses'
  },
  {
    icon: 'bag-md',
    text: 'Your orders',
    name: 'orders'
  },
  {
    icon: 'user',
    text: 'Personal data',
    name: 'data'
  },
  {
    icon: 'filter',
    text: 'Notification settings',
    name: 'settings'
  },
  {
    icon: 'logout',
    text: 'Log out',
    name: 'logout'
  }
]
</script>

<style lang="scss" scoped>
.container {
  width: 320px;
  height: 290px;
  background: #ccc;
  border-radius: 10px;

  background: -webkit-linear-gradient(
    to right,
    #f64f59,
    #c471ed,
    #12c2e9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f64f59,
    #c471ed,
    #12c2e9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  &__header {
    padding: 18px 20px;
    border-bottom: 1px solid #dde0e6;
  }

  &__body {
    padding: 8px 20px 16px;
  }
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;

  &__figure {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    font-family: $golos-bold;
    font-size: 24px;
    line-height: 32px;
    color: #fff;
    background: #e8929d;
    border-radius: 50%;
  }

  &__figcaption {
    flex: 1;
    font-family: $golos-regular;
    font-size: 16px;
    line-height: 24px;
    margin-left: 12px;
  }
}

.list {
  &__item {
    display: flex;
    padding: 6px 20px;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 0 #00000000;
    transition: background-color 0.2s ease 0s, box-shadow 0.2s ease 0s;

    &:last-child {
      color: #db1838;
    }

    &:hover {
      background-color: #ffffff6b;
      box-shadow: 0px 1px 4px #00000029;
    }
  }
}

.icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
}

.text {
  font-family: $golos-regular;
  font-size: 16px;
  line-height: 24px;
  padding: 0 12px;
}

.badge {
  border-radius: 24px;
}
</style>
