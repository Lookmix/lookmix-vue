<template>
  <v-app-bar 
    app
    absolute
    color="primary"
    :dark="false"
    elevate-on-scroll
    scroll-target="#sheet-main"
  >
    <v-app-bar-nav-icon 
      @click="leftArrowFunction ? redirectToPrevious() : setShowNavDrawer(true)"
    >
      <v-icon> 
        {{ leftArrowFunction ? "mdi-arrow-left" : "mdi-menu" }} 
      </v-icon>
    </v-app-bar-nav-icon>

    <v-toolbar-title class="font-weight-bold"> 
      {{ toolbarTitle }} 
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <toolbar-top-buttons/>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import ToolbarTopButtons from '../ToolbarTopButtons.vue';

export default {
  components: { ToolbarTopButtons },
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
  }
}
</script>

<style scoped>

</style>