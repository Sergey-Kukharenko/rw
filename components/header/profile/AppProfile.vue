<template>
  <div class="profile">
    <app-dropdown :options="getOptions">
      <template #button>
        <app-profile-button :user="user" />
      </template>
      <template #dropdown>
        <app-profile-preview v-if="user.authorized" :user="user" />
        <app-profile-form v-else />
      </template>
    </app-dropdown>
  </div>
</template>

<script setup>
import AppDropdown from '@/components/shared/AppDropdown.vue'
import AppProfileButton from '@/components/header/profile/AppProfileButton.vue'
import AppProfilePreview from '@/components/header/profile/AppProfilePreview.vue'
import AppProfileForm from '@/components/header/profile/AppProfileForm.vue'

import { useUserStore } from '@/stores/useUserStore'
import { useIsDevice } from '@/composables/states'

const isDevice = useIsDevice()
const store = useUserStore()
const user = computed(() => store.user)

const options = {
  top: '-20px',
  right: 0
}

const getOptions = computed(() => !isDevice.value && options)
</script>