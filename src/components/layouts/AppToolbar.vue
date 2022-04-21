<template>
  <v-app-bar 
    app
    absolute
    :dark="false"
    elevate-on-scroll
    scroll-target="#sheet-main"
  >
    <v-app-bar-nav-icon 
      @click="leftArrowFunction ? redirectToPrevious() : setShowNavDrawer(true)"
      v-slot:default
    >
      <v-icon> 
        {{ leftArrowFunction ? "mdi-arrow-left" : "mdi-menu" }} 
      </v-icon>
    </v-app-bar-nav-icon>

    <v-toolbar-title> 
      {{ toolbarTitle }} 
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn 
      v-if="isClosetRoute" 
      icon 
      color="accent"
      @click="redirectToForm()"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-btn 
      v-if="isClothesFormRoute" 
      rounded
      elevation="0"
      small
      color="secondary"
      @click="saveClothesForm()"
    >
      SALVAR
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "AppToolbar",
  computed: {
    ...mapState([
      "showNavDrawer",
      "previousPage"
    ]),
    ...mapGetters([
      "currentRouteName",
      "toolbarTitle"
    ]),
    isClosetRoute () {
      return this.currentRouteName === "closet"
    },
    isClothesFormRoute () {
      return this.currentRouteName === "clothesForm"
    },
    leftArrowFunction () {
      const routesLeftArrowIcon = [ "clothesForm" ]
      
      if (routesLeftArrowIcon.includes(this.currentRouteName)) {
        return true
      }
      return false
    }
  },
  methods: {
    ...mapMutations([
      "setShowNavDrawer"
    ]),
    redirectToPrevious () {
      this.$router.push(this.previousPage)
    },
    redirectToForm () {
      this.$router.push("clothes-form")
    },
    saveClothesForm () {
      
    }
  }
}
</script>

<style scoped>

</style>