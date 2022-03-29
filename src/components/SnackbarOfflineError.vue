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
import { mapState, mapMutations } from "vuex"

export default {
  computed: {
    ...mapState([
      "connectionOffline"
    ]),
  },
  methods: {
    ...mapMutations([
      "setConnectionOffline"
    ]),
    closeSnackbar () {
      this.setConnectionOffline(false)
    }
  }
}
</script>

<style scoped>

</style>