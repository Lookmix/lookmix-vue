// https://vuejs.org/guide/reusability/composables.html
import { ref, watchEffect } from "vue"

export function useIsMobileDevice() {
	const userAgent = ref(navigator.userAgent)
	const isMobileDevice = ref(null)
  const checkDevice = () => {
		const result = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent.value);
		isMobileDevice.value = result
  }
  watchEffect(() => {
    checkDevice()
  })
  return { isMobileDevice }
}