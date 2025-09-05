<template>
  <v-dialog
    :model-value="isInstallerVisibe"
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
          @click="closeInstaller()"
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

<script setup lang="ts">
import { usePWAInstaller } from "./../composables/installer"
import { onMounted } from "vue"

const { 
  isInstallerVisibe, 
  install, 
  showInstaller, 
  closeInstaller, 
  hasInstallPrompt
// } = usePWAInstaller(async (userChoise) => {
} = usePWAInstaller((userChoise) => {
  // userChoise.then((choiceResult: any) => {
  //   console.log("user choice result", choiceResult["outcome"])
  // })
  // const result = await userChoise
  // console.log("user choice result", result)
  // console.log("isInstallerVisibe", isInstallerVisibe.value)
  if (hasInstallPrompt.value) {
    console.log("dialoginstall hasInstallPrompt.value", hasInstallPrompt.value)
    showInstaller()
  }
})

</script>
