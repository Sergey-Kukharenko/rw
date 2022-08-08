<template>
  <div class="star-ratings">
    <vue3-star-ratings
      v-model="rating"
      :inactiveColor="inactiveColor"
      :starColor="starColor"
      :showControl="showControl"
      :disableClick="disableClick"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  rating: {
    type: Number,
    default: 5
  },
  inactiveColor: {
    type: String,
    default: '#F7F7F7'
  },
  starColor: {
    type: String,
    default: '#FFCD1E'
  },
  showControl: {
    type: Boolean,
    default: false
  },
  disableClick: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="scss">
.star-ratings {
  overflow: hidden;
  width: 210.16px;
  height: 42.03px;
}

.vue3-star-ratings__wrapper {
  display: block;
  margin: 0 !important;
  padding: 0 !important;

  .stars {
    outline: 1px solid;
    margin: 0 !important;
    padding: 0 !important;

    svg {
      width: 38.04px !important;
      height: 38.04px !important;
      margin: 0 2px;
      fill: #f7f7f7;
    }
  }
}
</style>
