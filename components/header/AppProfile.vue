<template>
  <div class="profile">
    <app-dropdown right="0">
      <template #button>
        <div class="card">
          <div class="card__figure">
            <SvgSprite symbol="profile" class="card__icon" />
          </div>
          <div class="card__figcaption">Log in / Register</div>
        </div>
      </template>
      <template #dropdown>
        <app-profile-preview />
      </template>
    </app-dropdown>
  </div>
</template>

<script setup>
import dataUser from '@/data/user'
import AppDropdown from '@/components/shared/AppDropdown.vue'
import AppProfilePreview from '@/components/header/profile/AppProfilePreview.vue'

const user = ref(dataUser)
const char = computed(() => user.value.fullName.substring(0, 1))
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;

  @include lt-md {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;

    @include gt-sm {
      width: 28px;
      height: 28px;
      margin: 0 auto;
    }

    @include lt-md {
      width: 32px;
      height: 32px;
      background: $bg-grey;
      border-radius: 50%;
    }
  }

  &__icon {
    fill: $color-light-grey;

    @include gt-sm {
      width: 26.45px;
      height: 24px;
    }

    @include lt-md {
      width: 12px;
      height: 12px;
    }
  }

  &__figcaption {
    text-align: center;
    color: $color-white-grey;

    @include gt-sm {
      font-family: $golos-medium;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      margin-top: 7px;
    }

    @include lt-md {
      font-family: $golos-regular;
      font-size: 12px;
      line-height: 16px;
      margin-left: 8px;
    }
  }

  &:hover {
    opacity: 0.75;
  }
}

.profile__dropdown {
  top: 0;
  right: 0;
}
</style>
