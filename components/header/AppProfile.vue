<template>
  <div class="profile">
    <app-dropdown :options="options">
      <template #button>
        <app-profile-button :user="user" />
      </template>
      <template #dropdown>
        <app-profile-preview v-if="user.authorized" :user="user" />
        <div v-else>Here is Form</div>
      </template>
    </app-dropdown>
  </div>
</template>

<script setup>
import dataUser from '@/data/user'

import AppDropdown from '@/components/shared/AppDropdown.vue'
import AppProfileButton from '@/components/header/profile/AppProfileButton.vue'
import AppProfilePreview from '@/components/header/profile/AppProfilePreview.vue'

const user = ref(dataUser)
const char = computed(() => user.value.fullName.substring(0, 1))

const options = {
  top: '-20px',
  right: 0
}
</script>
