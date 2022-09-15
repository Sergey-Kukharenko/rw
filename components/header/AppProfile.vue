<template>
  <div class="profile">
    <app-dropdown :options="options">
      <template #button>
        <app-profile-button :user="user" />
      </template>
      <template #dropdown>
        <app-profile-preview v-if="user.authorized" :user="user" />
        <div v-else class="profile-form">
          <h1>Will be form ...</h1>
          <button @click="store.logIn()" class="profile-form__button">
            log in
          </button>
        </div>
      </template>
    </app-dropdown>
  </div>
</template>

<script setup>
import AppDropdown from '@/components/shared/AppDropdown.vue'
import AppProfileButton from '@/components/header/profile/AppProfileButton.vue'
import AppProfilePreview from '@/components/header/profile/AppProfilePreview.vue'

import { useUserStore } from '@/stores/useUserStore'

const store = useUserStore()
const user = computed(() => store.user)
const char = computed(() => user.value.fullName.substring(0, 1))

const options = {
  top: '-20px',
  right: 0
}
</script>

<style lang="scss" scoped>
.profile-form {
  height: 290px;
  width: 320px;
  padding: 18px 20px;

  &__button {
    color: #fff;
    padding: 0.5em;
    background: #ccc;
    border-radius: 8px;
  }
}
</style>
