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
        :min-height="maxHeight"
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

    <ToolbarBottom/>

    <SnackbarOfflineError />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import AppToolbar from "./components/layouts/AppToolbar.vue";
import NavigationDrawer from "./components/layouts/NavigationDrawer.vue";
import SnackbarOfflineError from "./components/SnackbarOfflineError.vue";
import ToolbarBottom from "./components/ToolbarBottom.vue"
import * as resize from "./resize.js"

export default {
  components: {
    AppToolbar,
    NavigationDrawer,
    ToolbarBottom,
    SnackbarOfflineError,
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
      "backgroundColor",
    ])
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
