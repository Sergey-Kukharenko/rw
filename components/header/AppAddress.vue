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
          <div class="list__item" v-for="(item, idx) in address" :key="idx">
            <div class="text">{{item}}</div>
            <div class="text text--grey">{{item}}</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
const query = ref('')
const address = ref([])
//
watchEffect(() => {
  console.log(query.value);
})


</script>

<style lang="scss" scoped>
.container {
  width: 508px;
  height: 400px;
  box-sizing: border-box;
  outline: 1px solid;

  &__layout {
    padding: 0 24px;
  }

  &__header {
    padding: 0 24px;
    border-bottom: 1px solid #dde0e6;
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
  &__item {
    padding: 10px 0;
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
