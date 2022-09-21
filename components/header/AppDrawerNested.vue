<template>
  <div :class="classNames">
    <div @click="close" class="header">
      - <slot name="header"/>
    </div>
    <div class="container">
      <slot name="container"/>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  visible: {
    type: Boolean,
    required: true
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
  right: -100%;
  background: #7C7C7C;
  overflow-y: auto;
  transform: translateX(0%);
  transition: transform .25s ease 0s;

  &--active {
    transform: translateX(-100%);
  }
}

.header{
  font-size: 18px;
  padding: 12px;
}

.container{
  padding: 0 12px;
}
</style>
