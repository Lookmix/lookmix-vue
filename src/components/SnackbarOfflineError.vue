<template>
  <div>
    <!-- 
      TODO: use a computed property to set snackbar value -> 
      this.connectionOffline && this.showSnackbar, 
      instead change directly the value of connectionOffline 
      via mutation 
    -->
    <v-snackbar
      :model-value="connectionOffline"
      color="error"
    >
      Você está offline, verifique sua conexão e tente novamente

      <template v-slot:actions="{ attrs }">
        <v-btn
          variant="text"
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
      "connectionOffline" // TODO: must be a getter
    ]),
  },
  methods: {
    ...mapMutations([
      "setConnectionOffline"
    ]),
    closeSnackbar () {
      // TODO: this.showSnackbar = false
      this.setConnectionOffline(false) // TODO: remove
    }
  }
}
</script>

<style scoped>

</style>