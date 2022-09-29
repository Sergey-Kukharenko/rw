<template>
  <div class="profile">
    <app-profile-button :user="user" />
  </div>
</template>

<script setup>
import AppProfileButton from '@/components/header/profile/AppProfileButton.vue'

import { useUserStore } from '@/stores/useUserStore'
const store = useUserStore()
const user = computed(() => store.user)
</script>
