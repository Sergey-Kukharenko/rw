export function useScrollHandler() {
  const scrolled = ref(false)
  const limit = ref(184)

  const handleScroll = () => scrolled.value = limit.value < window.scrollY

  onMounted(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { scrolled }
}
