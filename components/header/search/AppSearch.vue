<template>
  <div class="search" v-click-outside="onHideSearchHistory">
    <div class="layout">
      <form class="search-form" @submit.prevent="onSubmit">
        <input
          autocomplete="off"
          type="text"
          name="name"
          placeholder="Search for the best bouquet"
          class="input"
          v-model="query"
          @focus="onShowSearchHistory"
        />
        <app-button theme="search" size="lg">Search</app-button>
      </form>

      <div class="section" v-show="isSearchHistory">
        <div class="section__title">Search history</div>
        <div class="section__list">
          <app-list :list="searchHistory" hasRemoveBtn @removeItem="onRemoveItem" />
        </div>
      </div>

      <div class="section" v-show="isSearchResult">
        <div class="section__title">Categories</div>
        <div class="section__list">
          <app-list :list="filteredList" @addItem="onAddItem" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import siteData from '@/data/site-data'
import { useUserStore } from '@/stores/useUserStore'
import AppButton from '@/components/shared/AppButton.vue'
import AppList from './AppList.vue'

const data = ref(siteData)

const query = ref('')
const filteredList = computed(() =>
  data.value.filter((item) =>
    item.toLowerCase().includes(query.value.toLowerCase())
  )
)

const isSearchResult = computed(
  () => filteredList.value.length > 0 && query.value
)

const store = useUserStore()
const searchHistory = computed(() => store.user.searchHistory)

const showSearchHistory = ref(false)
const isSearchHistory = computed(
  () =>
    searchHistory.value.length > 0 && showSearchHistory.value && !query.value
)

const onShowSearchHistory = () => (showSearchHistory.value = true)
const onHideSearchHistory = () => (showSearchHistory.value = false)
const clearQuery = () => query.value = ''

const onSubmit = () => {
  store.addToHistory(query.value)
  clearQuery()
}

const onRemoveItem = (payload) => {
  store.removeFromHistory(payload)
}

const onAddItem = (payload) => {
  store.addToHistory(payload)
  clearQuery()
}


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
  margin: 16px 0;

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
</style>
