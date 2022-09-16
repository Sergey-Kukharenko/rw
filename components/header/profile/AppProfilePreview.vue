<template>
  <div class="profile-preview">
    <app-profile-header :user="user" />
    <app-profile-list :user="user" />
  </div>
</template>

<script setup>
import AppProfileHeader from './AppProfileHeader.vue'
import AppProfileList from './AppProfileList.vue'

const props = defineProps({
  user: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.profile-preview {
  @include gt-sm {
    width: 320px;
  }

  @include lt-md {
    width: 290px;
    padding: 18px 0px;
    box-sizing: border-box;
  }
}
</style>
