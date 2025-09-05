// https://vuejs.org/guide/reusability/composables.html
// https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt
import { ref, computed } from "vue"
import type { Ref } from "vue"

export function usePWAInstaller(beforeInstallPromptCallback: () => void = () => {}) {
	let installPrompt: Ref<any> = ref<any>(null)
	let isInstallerVisibe: Ref<boolean> = ref<boolean>(false)
	let alreadyInstalled: Ref<boolean> = ref<boolean>(false)

	window.addEventListener("beforeinstallprompt", (event) => {
		event.preventDefault()
		installPrompt.value = event
		beforeInstallPromptCallback()		
	})

	window.addEventListener("appinstalled", () => {
		disableInAppInstallPrompt();
		closeInstaller()
		alreadyInstalled.value = true
	})

	const install = (): void => {
		if (!hasInstallPrompt.value) {
			return
		}
		installPrompt.value.prompt()
		disableInAppInstallPrompt()
		closeInstaller()
	}

	const disableInAppInstallPrompt = (): void => {
		installPrompt.value = null
	}

	const showInstaller = (): void => {
		isInstallerVisibe.value = true
	}

	const closeInstaller = (): void => {
		isInstallerVisibe.value = false
	}

	const hasInstallPrompt = computed(() => installPrompt.value ? true : false)

	return { 
		isInstallerVisibe,
		install,
		alreadyInstalled,
		showInstaller,
		closeInstaller,
		hasInstallPrompt
	}
}