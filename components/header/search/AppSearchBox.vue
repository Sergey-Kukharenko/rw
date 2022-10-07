<template>
  <div class="search" v-click-outside="onFocusOut">
    <div class="layout layout--md">
      <div :class="classNames">
        <form class="search-form" @submit.prevent="onSubmit">
          <input
            autocomplete="off"
            type="text"
            name="name"
            placeholder="Search for the best bouquet"
            class="input"
            v-model="query"
            @focus="onFocusIn"
          />
          <app-button v-if="!isDevice" theme="search" size="lg" class="search__button">
            Search
          </app-button>
        </form>
        <button v-if="isDevice" class="search__cancel cancel" @click="clearQuery">
          Cancel
        </button>
      </div>

      <div class="section" v-show="isSearchHistory">
        <div class="section__title">Search history</div>
        <div class="section__list">
          <app-list
            :list="searchHistory"
            hasRemoveBtn
            @removeItem="onRemoveItem"
          />
        </div>
      </div>

      <div class="section" v-show="isSearchResult">
        <div class="section__title">Categories</div>
        <div class="section__list">
          <app-list :list="filteredList" @addItem="onAddItem" />
        </div>
      </div>

      <app-not-found v-show="isNotFound" />
    </div>
  </div>
</template>

<script setup>
import siteData from '@/data/site-data'
import { useIsDevice } from '@/composables/states'
import { useUserStore } from '@/stores/useUserStore'

import AppButton from '@/components/shared/AppButton.vue'
import AppList from './AppList.vue'
import AppNotFound from './AppNotFound.vue'

const data = ref(siteData)

const isDevice = useIsDevice()

const query = ref('')
const showSearchHistory = ref(false)
const isVisible = ref(false)

const filteredList = computed(() => {
  return data.value.filter((item) => {
    return item.toLowerCase().includes(query.value.toLowerCase())
  })
})

const isSearchResult = computed(() => {
  return filteredList.value.length > 0 && query.value
})

const isNotFound = computed(() => {
  return filteredList.value.length === 0 && query.value !== ''
})

const store = useUserStore()
const searchHistory = computed(() => store.user.searchHistory)

const isSearchHistory = computed(() => {
  return (
    searchHistory.value.length > 0 && showSearchHistory.value && !query.value
  )
})

const classNames = computed(() =>
  useToggleClassName(isVisible.value, 'search-group', 'active')
)

const onFocusIn = () => {
  isVisible.value = true
  showSearchHistory.value = true
}

const onFocusOut = () => {
  isVisible.value = false
  showSearchHistory.value = false
}

const clearQuery = () => (query.value = '')

const onSubmit = () => {
  if(!query.value) return
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
.search {
  background: #fff;

  @include gt-sm {
    min-height: 376px;
  }

  @include lt-md {
    margin-top: 12px;
  }
}

.search-group {
  display: flex;
  width: 100%;

  @include lt-md {
    &--active {
      & .cancel {
        display: block;
      }
    }
  }
}

.search-form {
  display: flex;

  @include lt-md {
    flex: 1;
  }
}

.input {
  font-family: $golos-regular;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  background: $bg-grey;
  outline: none;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;

  @include gt-sm {
    padding: 16px;
  }

  @include lt-md {
    padding: 12px 16px;
  }

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }

  @include gt-sm {
    width: 620px;
    margin-right: 24px;
  }

  @include lt-md {
    width: 100%;
  }
}

.section {
  @include gt-sm {
    display: flex;
    margin: 16px 0;
  }

  @include lt-md {
    margin: 24px 0;
  }

  &__title {
    font-family: $golos-regular;
    font-size: 14px;
    color: $color-white-grey;
    letter-spacing: -0.01em;

    @include gt-sm {
      width: 164px;
      line-height: 24px;
      padding-right: 10px;
    }
  }
}

.cancel {
  display: none;
  font-family: $golos-regular;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: $color-white-grey;
  margin-left: 8px;
}
</style>
