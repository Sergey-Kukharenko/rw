<template>
  <div class="search">
    <div class="layout">
      <form class="search-form" @submit.prevent="store.addToHistory(query)">
        <input
          autocomplete="off"
          type="text"
          name="name"
          placeholder="Search for the best bouquet"
          class="input"
          v-model="query"
        />
        <app-button theme="search" size="lg">Search</app-button>
      </form>

      <div class="search__section section">
        <div class="section__title">Search history</div>
        <div class="section__list">
          <div class="list">
            <div
              class="list__item"
              v-for="(item, idx) in searchHistory"
              :key="idx"
              @click="store.removeFromHistory(item)"
            >
              {{ item }}

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/useUserStore'
import AppButton from '@/components/shared/AppButton.vue'

const query = ref('')

const store = useUserStore()
const searchHistory = computed(() => store.user.searchHistory)
</script>

<style lang="scss" scoped>
.layout {
  outline: 1px solid;
}

.search {
  background: #fff;
  min-height: 376px;
  border-radius: 0 0 24px 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);

  &__section {
    margin: 16px 0;
  }
}

.search-form {
  display: flex;
}

.input {
  width: 620px;
  font-family: $golos-regular;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  background: $bg-grey;
  padding: 16px;
  margin-right: 24px;
  outline: none;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }
}

.section {
  display: flex;

  &__title {
    width: 164px;
    padding-right: 10px;
    font-family: $golos-regular;
    font-size: 14px;
    line-height: 24px;
    color: $color-white-grey;
    letter-spacing: -0.01em;
  }
}

.list {
  &__item {
    font-family: $golos-regular;
    font-size: 16px;
    line-height: 24px;
    color: $color-dark-grey;
    padding: 4px 8px;
    cursor: pointer;

    &:hover{
      background: $bg-grey;
      border-radius: 10px;
    }
  }
}
</style>
