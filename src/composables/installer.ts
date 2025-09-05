// https://vuejs.org/guide/reusability/composables.html
// https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt
import { ref, computed } from "vue"
import type { Ref } from "vue"

export function usePWAInstaller(beforeInstallPromptCallback: (event: any) => void = () => {}) {
	let installPrompt: Ref<any> = ref<any>(null)
	let isInstallerVisibe: Ref<boolean> = ref<boolean>(false)
	let alreadyInstalled: Ref<boolean> = ref<boolean>(false)
	const alreadyShowInstaller = ref<boolean>(false)

	const handleBeforeInstallPrompt = (event: any) => {
		event.preventDefault()
		installPrompt.value = event
		// mostrar o installer
		console.log("window.addEventListener('beforeinstallprompt'")
		beforeInstallPromptCallback(event["userChoice"])
	}

	window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

	window.addEventListener("appinstalled", () => {
		disableInAppInstallPrompt();
		// não mostrar o installer
		closeInstaller()
		alreadyInstalled.value = true
		console.log(`appinstalled event was fired.`);
	})

	// const install = (): void => {
	function install() {
		// console.log(`install(): ${hasInstallPrompt()} ${installPrompt}`)
		if (!hasInstallPrompt.value) {
			return
		}
		console.log("installPrompt.value", installPrompt.value) // verificar se existe diferença no conteúdo dessa variavel antes e depois de instalar o app, se houver, será possível criar um if que cheque se o app está instalado para mostrar ou não o dialog e o botão de instalar
		const result = installPrompt.value.prompt()
		console.log(`Install prompt was: ${result.outcome}`)

		disableInAppInstallPrompt()
		closeInstaller()
		
		// window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
	}

	// const disableInAppInstallPrompt = (): void => {
	function disableInAppInstallPrompt() {
		installPrompt.value = null
	}

	function showInstaller() {
		if (alreadyShowInstaller.value) {
			return
		}
		isInstallerVisibe.value = true
		alreadyShowInstaller.value = true
	}

	function closeInstaller() {
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