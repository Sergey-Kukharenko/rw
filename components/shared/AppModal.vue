<template>
  <transition name="fade">
    <div class="vue-modal" v-show="open">
      <div class="vue-modal-inner">
        <div class="vue-modal-content">
          <slot/>
          <button type="button" @click="close">Close</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {onMounted, onUnmounted} from 'vue';

export default {
  props: {
    open: {
      type: Boolean,
      required: true
    },
  },
  setup(_, {emit}) {
    const close = () => {
      emit('close');
    };

    const handleKeyup = (event) => {
      if (event.keyCode === 27) {
        close();
      }
    };

    onMounted(() => document.addEventListener('keyup', handleKeyup));
    onUnmounted(() => document.removeEventListener('keyup', handleKeyup));

    return {close};
  },
};
</script>

<style lang="scss" scoped>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.vue-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 4;
}

.vue-modal-inner {
  max-width: 500px;
  margin: 2rem auto;
}

.vue-modal-content {
  position: relative;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
  border-radius: 0.3rem;
  padding: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
