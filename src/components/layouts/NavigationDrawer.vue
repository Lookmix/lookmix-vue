<template>
  <div>
    <v-navigation-drawer
      :model-value="showNavDrawer"
      temporary
      width="250"
      @update:model-value="updateDrawerState()"
    >
      <v-list-item 
        :style="{
          'height': currentAppBarHeight+'px'
        }"
      >
        <template v-slot:prepend>
          <v-avatar image="../../assets/icon-512x512.png"></v-avatar>
        </template>

        <v-list-item-title>Bem-vindo</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :disabled="item.disabled"
        >
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>

          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="doLogout()">
          <template v-slot:prepend>
            <v-icon>mdi-logout</v-icon>
          </template>

          <v-list-item-title>SAIR</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <template v-slot:append>
        <v-list>
          <!-- 
          <v-list-item
            id="install-button"
            title="Instalar"
            hidden
          >
          </v-list-item>

          <v-divider></v-divider>
          -->

          <v-list-item
            title="Versão 0.0.2"
          >
            <template v-slot:append>
              <v-badge
                color="primary"
                content="BETA"
                inline
              ></v-badge>
            </template>
          </v-list-item>
        </v-list>
      </template>

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
        { title: 'PERFIL', icon: 'mdi-account-outline', disabled: true }
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
    updateDrawerState() {
      this.setShowNavDrawer()
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
      this.$router.push("/login2")
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
  // mounted () {
  //   TODO: use a composable for this 
  //   let installPrompt = null;
  //   const installButton = document.querySelector("#install-button");
  //   window.addEventListener("beforeinstallprompt", (event) => {
  //     event.preventDefault();
  //     installPrompt = event;
  //     installButton.removeAttribute("hidden");
  //   });

  //   installButton.addEventListener("click", async () => {
  //     if (!installPrompt) {
  //       return;
  //     }
  //     const result = await installPrompt.prompt();
  //     console.log(`Install prompt was: ${result.outcome}`);
  //     disableInAppInstallPrompt();
  //   });

  //   window.addEventListener("appinstalled", () => {
  //     disableInAppInstallPrompt();
  //   });

  //   function disableInAppInstallPrompt() {
  //     installPrompt = null;
  //     installButton.setAttribute("hidden", "");
  //   }
  // }
}
</script>

<style scoped>

</style>