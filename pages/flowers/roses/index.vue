<template>
  <div class="layout layout--horizontal">
    <h1>{{ routeName }}</h1>
  </div>
</template>

<script setup>
const route = useRoute()
const path = route.path
const n = path.lastIndexOf('/')
const routeName = path.substring(n + 1)
</script>
