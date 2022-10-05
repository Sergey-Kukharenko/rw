<template>
  <div class="location">
    <div class="nested-group">
      <app-location-button :location="location" @click="open" />
    </div>

    <app-drawer-nested
      :visible="isVisible"
      @close="close"
      title="Delivery city"
    >
      <app-address />
    </app-drawer-nested>
  </div>
</template>

<script setup>
import AppDrawerNested from '@/components/header/mobile/AppDrawerNested'
import AppAddress from '@/components/header/address/AppAddress.vue'
import AppLocationButton from '@/components/header/location/AppLocationButton.vue'

const location = ref({
  city: '',
  address: ''
})

const isVisible = ref(false)

const open = () => {
  isVisible.value = true
}

const close = () => {
  isVisible.value = false
}

const updateLocation = (payload) => {
  location.value = payload
  isVisible.value = false
}

provide('location', {
  updateLocation
})

const { updateVisibility } = inject('visibility')

watchEffect(() => {
  updateVisibility(isVisible.value)
})
</script>
