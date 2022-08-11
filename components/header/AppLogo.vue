<template>
  <a class="logo">FLOR</a>
</template>

<script setup>

const isMobile = useIsMobile()
</script>

<style lang="scss" scoped>
.logo {
  font-family: $lora;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 0.7444;
  text-align: center;
  letter-spacing: 0.32em;
  cursor: pointer;

  @include lt-md {
    order: 0;
    padding: 8px;
    margin-right: auto;
  }
}
</style>
