<template>
  <div>
    <v-navigation-drawer
      app
      :value="showNavDrawer"
      temporary
      width="250"
      @input="updateDrawerState($event)"
    >
      <v-list-item 
        :style="{
          'height': currentAppBarHeight+'px'
        }"
      >
        <v-list-item-avatar>
          <v-img src="../../assets/icon-512x512.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="doLogout()">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>SAIR</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-snackbar
      v-model="errorSnackbar"
      color="error"
    >
      {{ errorMessage }}

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="errorSnackbar = false"
        >
          OK
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data () {
    return {
      drawer: null,
      items: [
        { title: 'PERFIL', icon: 'mdi-account-outline' },
      ],
      logoutFailError: "logoutFail",
      errorSnackbar: false,
      errorMessage: undefined,
    }
  },
  computed: {
    ...mapGetters(["showNavDrawer", "currentAppBarHeight"]),
  },
  methods: {
    ...mapMutations([
      "setShowNavDrawer",
      "setAuthenticated"
    ]),
    ...mapActions([
      "logout"
    ]),
    updateDrawerState(event) {
      if (!event) {
        this.setShowNavDrawer(false)
      }
    },
    doLogout() {
      this.logout()
        .then((response) => {
          this.setAuthenticated(false)
          this.redirectToLogin()
        })
        .catch((exception) => {
          this.handleLogoutErrors(this.logoutFailError)
          console.log(exception)
        })
    },
    redirectToLogin () {
      this.$router.push("/login")
    },
    handleLogoutErrors (error) {
      const errors = {
        logoutFail (self) {
          self.errorSnackbar = true
          self.errorMessage = "Falha ao fazer logout"
          return;
        }
      }
      const errorHandlerFunction = errors[error]
      const self = this

      errorHandlerFunction(self)
    }
  }
}
</script>

<style scoped>

</style>