<template>
  <resize-textarea
    :placeholder="placeholder"
    v-model="value"
    :rows="1"
    :minHeight="48"
    class="textarea"
  />
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Placeholder'
  },

  value: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:value'])

watchEffect(() => {
  emit('update:value', props.value)
})
</script>

<style lang="scss" scoped>
.textarea {
  width: 100%;
  font-family: $golos-regular;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  background: $bg-grey;
  padding: 14px 16px !important;
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
</style>
