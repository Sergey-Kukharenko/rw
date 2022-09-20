<template>
  <AppModalAbstraction v-if="props.visible" @close="close" :theme="props.theme">
    <slot />
  </AppModalAbstraction>
</template>

<script setup>
import AppModalAbstraction from '@/components/shared/AppModalAbstraction.vue'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  },

  theme: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close'])
const close = () => emit('close')
</script>
