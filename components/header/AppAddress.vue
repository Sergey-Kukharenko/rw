<template>
  <div class="container">
    <div class="container__header">
      <div class="container__layout">
        <h1>Address finder</h1>
      </div>
    </div>

    <div class="container__body">
      <div class="container__layout">
        <input
          type="text"
          name="name"
          placeholder="Start typing a post code, street or address"
          class="input"
          v-model="query"
        />

        <div class="container__section">
          <div class="list">
            <div
              class="list__item"
              v-for="(item, idx) in list"
              :key="idx"
              @click="onChange(item)"
            >
              <div class="title">{{ item.admin_0 }}</div>
              <div class="subtitle">{{ item.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const query = ref('')
const list = ref([])

const emit = defineEmits(['setLocation'])
const onChange = (item) => {
  emit('setLocation', { city: item.admin_0, description: item.description })
}

function buildQueryString(params) {
  const queryStringParts = []

  for (let key in params) {
    if (params.hasOwnProperty(key)) {
      queryStringParts.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
    }
  }

  return queryStringParts.join('&')
}
const url = 'https://api.woosmap.com/localities/autocomplete/'
const args = {
  key: 'woos-81a699ca-5082-3ffd-9f54-a684a4b82853',
  types: 'postal_code',
  components: 'country:gb|country:je|country:im|country:gg'
}
const params = buildQueryString(args)
const fullUrl = `${url}?${params}`

watchEffect(async () => {
  if (query.value) {
    useDebounce(async () => {
      const { data } = await useFetch(`${fullUrl}&input=${query.value}`)
      list.value = data.value.localities
    }, 300)()
  } else {
    list.value = []
  }
})
</script>

<style lang="scss" scoped>
.container {
  padding-top: 18px;
  box-sizing: border-box;

  &__layout {
    padding: 0 24px;
  }

  &__header {
    padding: 0 24px;
    border-bottom: 1px solid #dde0e6;
  }

  &__body {
    margin-top: 24px;
  }

  &__section {
    position: relative;

    &:after {
      content: ' ';
      height: 32px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(
        180deg,
        transparent,
        rgb(255 255 255 / 95%) 50%
      );
      z-index: 1;
    }
  }
}

.input {
  width: 100%;
  font-family: $golos-regular;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  background: $bg-grey;
  padding: 14px 16px;
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

.list {
  height: 233px;
  overflow-y: auto;
  margin: 24px 0 0;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &__item {
    margin: 10px 0;
    cursor: pointer;

    &:hover {
      background: $bg-grey;
    }
  }

  &__item {
    &:first-child {
      margin-top: 0;
    }
  }

  &__item {
    &:last-child {
      margin-bottom: 10px;
    }
  }
}

.title,
.subtitle {
  font-family: $golos-regular;
  font-size: 16px;
  line-height: 22px;

  &--grey {
    color: $color-white-grey;
  }
}

.subtitle {
  font-size: 14px;
  color: $color-white-grey;
}
</style>
