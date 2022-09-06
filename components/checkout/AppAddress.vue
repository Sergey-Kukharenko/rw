<template>
  <div class="address" v-click-outside="hide">
    <input
      type="text"
      name="address"
      placeholder="Choose delivery address"
      class="input"
      @focus="show"
    />
    <app-address-list
      v-show="isVisible"
      v-model:selected="address"
      :list="props.addresses"
    />
    {{ address }}
  </div>
</template>

<script setup>
import AppAddressList from '@/components/shared/AppAddressList.vue'

const props = defineProps({
  addresses: {
    type: Array,
    default: () => []
  }
})

const address = ref('')
const visibility = ref(false)
const hide = () => (visibility.value = false)
const show = () => (visibility.value = true)
const isVisible = computed(() => props.addresses.length > 0 && visibility.value)
</script>

<style lang="scss" scoped>
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
</style>