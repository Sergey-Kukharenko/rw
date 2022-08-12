export function useScrollHandler(id) {
  const scrolled = ref(false)
  const limit = ref(184)

  const handleScroll = () => scrolled.value = (limit.value < window.scrollY) ? true : false

  const setLimit = (id) => {
    const element = document.getElementById(id)
    limit.value = element.getBoundingClientRect().top
  }

  onMounted(() => {
    setLimit(id)
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { scrolled, handleScroll }
}
