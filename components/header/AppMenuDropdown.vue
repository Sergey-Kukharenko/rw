<template>
  <div class="dropdown">
    <div class="layout layout--horizontal-dt">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  display: none;
  width: 100%;
  position: absolute;
  left: 0;
  background: #ffffff;
  box-shadow: 0 4px 16px #0000001f;
  border-radius: 16px;
  z-index: 1;
}
</style>
