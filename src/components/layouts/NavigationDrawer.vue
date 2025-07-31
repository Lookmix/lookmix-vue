<template>
  <div>
    <v-navigation-drawer
      :model-value="showNavDrawer"
      temporary
      width="250"
      @update:model-value="updateDrawerState($event)"
    >
      <v-list-item 
        :style="{
          'height': currentAppBarHeight+'px'
        }"
      >
        <!-- <v-list-item-avatar> -->
        <template v-slot:prepend>
          <v-avatar image="../../assets/icon-512x512.png"></v-avatar>
        </template>
        <!-- </v-list-item-avatar> -->

        <!-- <v-list-item-content> -->
          <v-list-item-title>John Leider</v-list-item-title>
        <!-- </v-list-item-content> -->
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <!-- <v-list-item-icon> -->
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <!-- </v-list-item-icon> -->

          <!-- <v-list-item-content> -->
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          <!-- </v-list-item-content> -->
        </v-list-item>

        <v-list-item link @click="doLogout()">
          <!-- <v-list-item-icon> -->
          <template v-slot:prepend>
            <v-icon>mdi-logout</v-icon>
          </template>
          <!-- </v-list-item-icon> -->

          <!-- <v-list-item-content> -->
            <v-list-item-title>SAIR</v-list-item-title>
          <!-- </v-list-item-content> -->
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-snackbar
      v-model="errorSnackbar"
      color="error"
    >
      {{ errorMessage }}

      <template v-slot:actions="{ attrs }">
        <v-btn
          variant="text"
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