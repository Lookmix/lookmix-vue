<template>
  <v-app>
    <template v-if="user.authenticaded">
      <AppToolbar/>
    </template>

    <v-main :dark="false">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex"
import AppToolbar from "./components/layouts/AppToolbar.vue"

export default {
  components: {
    AppToolbar
  },
  computed: {
    ...mapState([
      "user"
    ])
  }
}
</script>

<style>

</style>
