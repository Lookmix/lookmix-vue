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

    <v-spacer></v-spacer>

    <v-btn v-if="isClosetRoute" icon color="accent">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "AppToolbar",
  computed: {
    ...mapState([
      "showNavDrawer"
    ]),
    ...mapGetters([
      "currentRouteName"
    ]),
    isClosetRoute () {
      return this.currentRouteName === "closet"
    }
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