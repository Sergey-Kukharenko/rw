<template>
  <div class="location">
    <app-location-button :location="location" @click="open" />

    <app-modal :visible="isVisible" @close="close">
      <app-address />
    </app-modal>
  </div>
</template>

<script setup>
import AppModal from '@/components/shared/AppModal.vue'
import AppAddress from '@/components/header/address/AppAddress.vue'
import AppLocationButton from '@/components/header/location/AppLocationButton.vue'
import { disableScroll, enableScroll } from '@/helpers/scrollLock'

const location = ref({
  city: '',
  address: ''
})

const isVisible = ref(false)

const open = () => {
  isVisible.value = true
  disableScroll()
}

const close = () => {
  isVisible.value = false
  enableScroll()
}

const updateLocation = (payload) => {
  location.value = payload
  isVisible.value = false
  enableScroll()
}

provide('location', {
  updateLocation
})
</script>

<style lang="scss" scoped>
</style>
