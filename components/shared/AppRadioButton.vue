<template>
  <label v-for="option in options" :key="option" :for="option">
    <input
      type="radio"
      :value="option"
      :id="option"
      @change="onChange(option)"
      :checked="option === selected"
    />
    {{ option }}
  </label>
</template>

<script setup>
const props = defineProps({
  selected: {
    type: String,
    required: true,
  },

  options: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['update:selected'])

const onChange = (item) => {
  emit('update:selected', item)
}

</script>



<style scoped>
.input-group {
  width: 35%;
  margin: 20px auto;
  padding: 15px 20px;
  border: 1px solid black;
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
}

label {
  cursor: pointer;
}
</style>
