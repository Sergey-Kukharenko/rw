<template>
  <div class="layout layout--horizontal">
    <h1>{{ routeName }}</h1>

    <video
      preload="none"
      ref="video"
      loop
      muted
      class="video"
      autoplay
    >
      <source src="https://flor2u.ru/images/uploads/original/88b/88b9ff7a1a93540d8b55403800f1334c.mp4">
    </video>
  </div>
</template>

<script setup>
const route = useRoute()
const path = route.path
const n = path.lastIndexOf('/')
const routeName = path.substring(n + 1)
</script>
