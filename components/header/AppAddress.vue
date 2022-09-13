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

        <div class="container__section" v-show="isList">
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
import { woosmapUrl } from '@/helpers/woosmapUrl'

const query = ref('')
const list = ref([])
const isList = computed(() => list.value.length > 0)

const emit = defineEmits(['setLocation'])
const onChange = (item) => {
  emit('setLocation', { city: item.admin_0, description: item.description })
}

const fullUrl = woosmapUrl()
watchEffect(async () => {
  if (query.value) {
    const { data } = await useFetch(`${fullUrl}&input=${query.value}`)
    list.value = data.value.localities
  }
})
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
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
        hsl(0deg 0% 100% / 85%) 50%
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
    background: #fff;
    border-radius: 10px;
    transition: background 0.2s ease 0s;

    &:hover {
      background: $bg-grey;

      & .title,
      & .subtitle {
        transform: translateX(16px);
      }
    }
  }

  &__item {
    &:first-child {
      margin-top: 0;
    }
  }

  &__item {
    &:last-child {
      margin-bottom: 24px;
    }
  }
}

.title,
.subtitle {
  font-family: $golos-regular;
  font-size: 16px;
  line-height: 22px;
  transform: translateX(0);
  transition: transform 0.2s ease 0.025s;

  &--grey {
    color: $color-white-grey;
  }
}

.subtitle {
  font-size: 14px;
  color: $color-white-grey;
  transition: transform 0.2s ease 0.05s;
}
</style>
