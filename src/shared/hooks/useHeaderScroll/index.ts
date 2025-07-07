import { ref, onMounted, onUnmounted } from 'vue'

export function useHeaderScroll() {
  const lastScrollPosition = ref(0)
  const isHeaderHidden = ref(false)

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop
    
    if (currentScrollPosition < lastScrollPosition.value || currentScrollPosition < 10) {
      isHeaderHidden.value = false
    } else if (currentScrollPosition > lastScrollPosition.value) {
      isHeaderHidden.value = true
    }

    lastScrollPosition.value = currentScrollPosition
  }

  onMounted(() => {
    const header = document.querySelector('.header')
    if (!header) return

    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { isHeaderHidden }
}