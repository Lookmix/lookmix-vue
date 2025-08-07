<template>
  <v-app-bar 
    position="absolute"
    color="backgroundBase"
    elevate-on-scroll
    scroll-target="#sheet-main"
    :elevation="0"
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
    ...mapGetters([
      "currentRouteName",
      "toolbarTitle",
      "previousPage"
    ]),
    leftArrowFunction () {
      const routesLeftArrowIcon = [ "clothesForm", "dailyLookSetup" ]
      
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