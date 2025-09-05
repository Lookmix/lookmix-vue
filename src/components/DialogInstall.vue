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

let alreadyShowInstaller: boolean = false

const { 
  isInstallerVisibe, 
  install, 
  showInstaller, 
  closeInstaller, 
  hasInstallPrompt
} = usePWAInstaller(() => {
  if (hasInstallPrompt.value && !alreadyShowInstaller) {
    showInstaller()
    alreadyShowInstaller = true
  }
})

</script>
