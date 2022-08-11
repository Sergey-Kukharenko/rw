<template>
  <div class="like" @click="toggle(like)">
    <SvgSprite
      symbol="like"
      :class="['like__icon', { active: like.by_user }]"
    />
    {{ like.count }}
  </div>
</template>

<script setup>
const props = defineProps({
  like: {
    type: Object,
    default: () => {}
  }
})

const like = ref(props.like)

const toggleLike = like => (like.by_user = !like.by_user)
const toggleCount = like => (like.by_user ? like.count-- : like.count++)

const toggle = (like) => {
  toggleCount(like)
  toggleLike(like)
}
</script>

<style lang="scss" scoped>
.like {
  display: flex;
  align-items: center;
  color: #000;
  user-select: none;
  cursor: pointer;

  &__icon {
    width: 14.67px;
    height: 13.23px;
    fill: #c9cbcd;
    margin-right: 8.67px;
  }

  &__icon.active {
    fill: $color-green;
  }
}
</style>
