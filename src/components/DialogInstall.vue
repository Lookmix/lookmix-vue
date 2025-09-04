<template>
  <v-dialog
    v-model="dialog"
    max-width="500"
    persistent
  >
    <v-card>
      <v-card-title>
        Melhore sua experiência
      </v-card-title>

      <v-card-text>
        Recomendamos a instalação do Lookmix no seu dispositivo para ter uma melhor experiência de uso.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text
          @click="dialog = false"
        >
          Depois
        </v-btn>

        <v-btn
          color="primary"
          @click="install()"
        >
          Instalar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue"

export default defineComponent({
  setup() {
    let dialog = ref<boolean>(false)

    // https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt
    // TODO: turn it into a composable
    let installPrompt: Event | any = null

    onMounted(() => {
      // const installButton = document.querySelector("#install-button");
      window.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        installPrompt = event;
        // installButton.removeAttribute("hidden");
        // mostrar o dialog
        dialog.value = true
      });

      window.addEventListener("appinstalled", () => {
        disableInAppInstallPrompt();
        // não mostrar o dialog
        dialog.value = false
      });
    })

    const install = (): void => {
      // clicou em instalar no dialog
      if (!installPrompt) {
        return;
      }
      const result = installPrompt.prompt();
      console.log(`Install prompt was: ${result.outcome}`);
      disableInAppInstallPrompt();
    };

    const disableInAppInstallPrompt = (): void => {
      installPrompt = null;
      // installButton.setAttribute("hidden", "");
    }

    return { dialog, install }
  }
})
</script>
