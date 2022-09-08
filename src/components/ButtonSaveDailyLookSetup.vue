<template>
  <v-btn
    icon
    color="primary"
    @click="saveDailyLookSetupClick()"
  >
    <v-icon>
      mdi-check-outline
    </v-icon>
  </v-btn>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions([
      "saveDailyLookSetup"
    ]),
    saveDailyLookSetupClick () {
      this.saveDailyLookSetup()
      this.$router.push("/daily-look")
    },
  }
}
</script>

<style scoped>

</style>