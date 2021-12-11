<template>
  <div>
    <v-snackbar
      :value="connectionOffline"
      color="error"
    >
      Você está offline, verifique sua conexão e tente novamente

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="closeSnackbar()"
        >
          OK
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  computed: {
    ...mapState([
      "connectionOffline"
    ]),
  },
  methods: {
    ...mapActions([
      "setSnackbarError"
    ]),
    closeSnackbar () {
      this.setSnackbarError(false)
    }
  }
}
</script>

<style scoped>

</style>