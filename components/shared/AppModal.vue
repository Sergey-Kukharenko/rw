<template>
  <transition>
    <AppModalAbstraction v-if="props.visible" @close="close">
      <slot />
    </AppModalAbstraction>
  </transition>
</template>

<script setup>
import AppModalAbstraction from '@/components/shared/AppModalAbstraction'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])
const close = () => emit('close')
</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
