<template>
  <div class="profile-preview">
    <app-header :user="user" />
    <app-list :user="user" />
  </div>
</template>

<script setup>
import AppHeader from './AppHeader.vue'
import AppList from './AppList.vue'

const props = defineProps({
  user: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.profile-preview {
  width: 320px;
  height: 290px;
}
</style>
