<template>
  <v-app>
    <template v-if="authenticated">
      <AppToolbar/>
    </template>

    <v-main :dark="false" class="overflow-hidden">
      <v-sheet
        :max-height="maxHeight"
        id="sheet-main"
        class="overflow-y-auto"
        :color="isLoginRoute ? '#ffb6c1ad' : isNewUserRoute ? '#8341a1d4' : 'initial'"
        :class="{
          'login-new-user-display': isLoginRoute || isNewUserRoute,
          'transition': isLoginRoute || isNewUserRoute
        }"
      >
        <router-view />
      </v-sheet>
    </v-main>
    <SnackbarOfflineError />
  </v-app>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import AppToolbar from "./components/layouts/AppToolbar.vue";
import SnackbarOfflineError from "./components/SnackbarOfflineError.vue";
import * as resize from "./resize.js"

export default {
  components: {
    AppToolbar,
    SnackbarOfflineError
  },
  mounted () {
    resize.onResize()
  },
  computed: {
    ...mapGetters([
      "authenticated", 
      "isNewUserRoute", 
      "isLoginRoute", 
      "maxHeight"
    ]),
    ...mapState(["user", "connectionOffline"]),
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
