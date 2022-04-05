<template>
  <v-app-bar 
    app
    absolute
    :dark="false"
    elevate-on-scroll
    scroll-target="#sheet-main"
  >
    <v-app-bar-nav-icon @click="setShowNavDrawer(true)"></v-app-bar-nav-icon>

    <v-toolbar-title> Lookmix </v-toolbar-title>

    <!-- color="primary" -->
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "AppToolbar",
  computed: {
    ...mapState([
      "showNavDrawer"
    ])
  },
  methods: {
    ...mapMutations([
      "setShowNavDrawer"
    ])
  }
}
</script>

<style scoped>

</style>