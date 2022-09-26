<template>
  <div class="section">
    <div class="header">
      {{ props.all.title }}
    </div>
    <div class="list">
      <div v-for="(item, idx) in props.all.list" :key="idx" class="list__item">
        <div class="figure">
          <img :src="item.img" class="figure__img"/>
        </div>
        <div class="figcaption">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  all: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style lang="scss" scoped>
.section {
  margin: 20px 0 0;
}

.header {
  font-family: $golos-bold;
  font-size: 14px;
  line-height: 16px;
}

.list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px 6px;
  margin: 12px 0;

  &__item {
    text-align: center;
  }
}

.figure {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 82px;
  height: 82px;
  border-radius: 10px;
  overflow: hidden;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.figcaption {
  font-family: $golos-regular;
  font-size: 12px;
  line-height: 12px;
  padding: 0 4px;
  margin: 10px auto 0;
}
</style>
