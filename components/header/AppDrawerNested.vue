<template>
  <div :class="classNames">
    <div @click="close" class="header">
      back - {{ props.title }}
    </div>
    <div class="container">
      <slot/>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  },

  title: {
    type: String,
    required: ''
  },
});

const classNames = computed(() =>
  useToggleClassName(props.visible, 'nested', 'active')
);

const emit = defineEmits(['close']);
const close = () => emit('close');
</script>

<style lang="scss" scoped>
.nested {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: -135%;
  background: #fff;
  overflow-y: auto;
  transform: translateX(-35%);
  opacity: 0;
  z-index: 1;
  transition: opacity .3s ease 0s, transform .3s ease 0s, right 0s ease .3s;

  &--active {
    right: -100%;
    opacity: 1;
    transform: translateX(-100%);
    z-index: 2;
    transition: opacity .3s ease 0s, transform .3s ease 0s, right 0s ease 0s;
  }
}

.header {
  font-size: 18px;
  padding: 12px;
}

.container {
  padding: 0 12px;
}
</style>
