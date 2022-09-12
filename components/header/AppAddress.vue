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

        <div class="list">
          <div
            class="list__item"
            v-for="(item, idx) in list"
            :key="idx"
            @click="handleClick(item)"
          >
            <div class="text">{{ item.display_name }}</div>
            <div class="text text--grey">{{ item.display_name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const query = ref('')
const list = ref([])

const handleClick = (item) => {
  console.log(item.display_name)
}

watchEffect(async () => {
  if (query.value) {
    const { data } = await useFetch(
      'https://nominatim.openstreetmap.org/search/' +
        query.value +
        '?format=json'
    )
    list.value = data.value
  }
})
</script>

<style lang="scss" scoped>
.container {
  width: 508px;
  height: 400px;
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
  height: 279px;
  overflow-y: auto;
  margin: 20px 0 0;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &__item {
    padding: 10px 0;
  }

  &__item {
    &:first-child {
      padding-top: 0;
    }
  }
}

.text {
  font-family: $golos-regular;
  font-size: 16px;
  line-height: 22px;

  &--grey {
    color: $color-white-grey;
  }
}
</style>
