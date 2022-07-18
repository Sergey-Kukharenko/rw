<template>
  <div class="layout layout--horizontal">
    <h1>{{name}}</h1>
  </div>
</template>

<script setup>
const route = useRoute()
const name = route.name
</script>
