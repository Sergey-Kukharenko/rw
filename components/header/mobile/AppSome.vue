<template>
  <button @click="open" class="nested-group">button</button>

  <app-drawer-nested :visible="isVisible" @close="close" title="SOME">
    HERE CONTENT
  </app-drawer-nested>
</template>

<script setup>
import AppDrawerNested from '@/components/header/AppDrawerNested'

const isVisible = ref(false)

const open = () => {
  isVisible.value = true
}

const close = () => {
  isVisible.value = false
}

const { updateVisibility } = inject('visibility')

watchEffect(() => {
  updateVisibility(isVisible.value)
})
</script>
