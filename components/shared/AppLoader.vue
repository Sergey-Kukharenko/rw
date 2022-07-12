<template>
  <div class="loader">
    <div class="loader__container">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loader {
  background: #ffffff;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 50;

  &__container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.spinner {
  width: 80px;
  height: 80px;
  margin: 100px auto;
  background: rgb(65, 184, 131);
  border-radius: 100%;
  -webkit-animation: scale-out 1s infinite ease-in-out;
  animation: scale-out 1s infinite ease-in-out;
}

@keyframes scale-out {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
