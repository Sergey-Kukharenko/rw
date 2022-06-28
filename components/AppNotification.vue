<template>
  <div :class="classNames">
    <div class="layout">
      <div class="notification__title">
        {{ notification.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
const notification = ref({
  title: 'Flowers will stand for 5 days or we’ll replace the bouquet!',
  theme: 'pink'
})

const options = {
  theme: notification.value.theme || ''
}

const classNames = computed(() => useClassName(options, 'notification'))
</script>

<style lang="scss" scoped>
.notification {
  &__title {
    font-family: $golos-bold;
    text-align: center;
    font-style: normal;
    color: #ffffff;
    letter-spacing: -0.01em;

    @include gt-xs {
      font-size: 14px;
      line-height: 24px;
      padding: 10px 0;
      margin: -24px 0;
    }
    @include xs {
      font-size: 13px;
      line-height: 16px;
      max-width: 214px;
      margin: 0 auto;
      padding: 8px 0;
    }
  }
}

.notification--pink {
  background: #ff217f;
}
</style>
