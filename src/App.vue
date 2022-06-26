<template>
  <v-app>
    <template v-if="authenticated">
      <AppToolbar/>
      <NavigationDrawer/>
    </template>

    <v-main :dark="false" class="overflow-hidden">
      <v-sheet
        :color="backgroundColor"
        :max-height="maxHeight"
        id="sheet-main"
        class="overflow-y-auto"
        :class="{
          'login-new-user-display': isLoginRoute || isNewUserRoute,
          'transition': isLoginRoute || isNewUserRoute
        }"
      >
        <router-view />
      </v-sheet>
    </v-main>

    <template v-if="showBottomNavigator && !showToolbarSelectedClothes">
      <BottomNavigator />
    </template>

    <template v-if="showToolbarSelectedClothes">
      <ToolbarSelectedClothes /> 
    </template>

    <SnackbarOfflineError />
  </v-app>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import AppToolbar from "./components/layouts/AppToolbar.vue";
import NavigationDrawer from "./components/layouts/NavigationDrawer.vue";
import BottomNavigator from "./components/layouts/BottomNavigator.vue"
import SnackbarOfflineError from "./components/SnackbarOfflineError.vue";
import ToolbarSelectedClothes from "./components/closet/ToolbarSelectedClothes.vue";
import * as resize from "./resize.js"

export default {
  components: {
    AppToolbar,
    NavigationDrawer,
    BottomNavigator,
    SnackbarOfflineError,
    ToolbarSelectedClothes
  },
  mounted () {
    resize.onResize()
  },
  computed: {
    ...mapGetters([
      "authenticated", 
      "isNewUserRoute", 
      "isLoginRoute", 
      "maxHeight",
      "currentRouteName",
      "backgroundColor",
      "showToolbarSelectedClothes"
    ]),
    ...mapState([
      "user",
      "connectionOffline"
    ]),
    showBottomNavigator () {
      return this.authenticated && this.currentRouteName !== "clothesForm"
    },
    isClothesFormRoute () {
      return this.currentRouteName === "clothesForm"
    },
  },
}
</script>

<style>
.login-new-user-display {
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.transition {
  transition: background 0.75s;
  /* transition: background 0.75s ease 0s; */
}
</style>
