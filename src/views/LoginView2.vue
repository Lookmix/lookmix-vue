<template>
  <div>
    <v-card    
      style="margin: auto; height: 530px;"
      elevation="3"
      rounded="shaped"
      :width="calculatedWidth"
      :disabled="loadingLogin"
      :loading="loadingLogin"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="secondary"
          height="4"
          indeterminate
        >
        </v-progress-linear>
      </template>
      <v-card-text>
        <div class="div-logo">
          <img src="../assets/hanger-light-clean.svg" class="hide-select-drag-effect logo" />
        </div>
        
        <h3 class="login-title"> Entre na sua conta </h3>

        <v-form autocomplete="off" v-model="isFormValid">
          <v-text-field
            variant="filled"
            v-model="email"
            color="secondary"
            :rules="emailRules"
            required
            label="E-mail *"
            type="email"
            placeholder="exemplo@dominio.com"
            persistent-hint
          />

          <v-text-field
            style="margin-top: 10px;"
            variant="filled"
            color="secondary"
            v-model="password"
            required
            :rules="passwordRules"
            :append-inner-icon="showPasswordClicked ? 'mdi-eye-off' : 'mdi-eye'"
            :type="showPasswordClicked ? 'text' : 'password'"
            label="Senha *"
            @click:append-inner="showPassword()"
            ref="passwordField"
          />

          <div style="display: flex; flex-direction: column; margin-top: 10px;">
            <v-btn
              style="margin: auto; width: 160px;"
              color="secondary"
              elevation="2"
              :rounded="'pill'"
              size="x-large"
              @click="login()"
              :loading="loadingLogin"
            >
              ENTRAR
            </v-btn>

            <v-divider 
              inset 
              style="margin: 15px 0px 15px 0px; max-width: 100% !important;">
            </v-divider>

            <v-btn
              style="width: 140px; margin: auto;"
              color="primary"
              variant="text"
              rounded
              size="small"
              @click="redirectToNewAccount()"
            >
              Criar uma conta
            </v-btn>

            <div
              style="width: 150px; margin: 15px auto auto auto;"
            >
              <DialogConfirmEmail
                :userEmailProp="email" 
                :passwordReset="true"
              />
            </div>
          </div>
        </v-form>
      </v-card-text>
    </v-card>

    <v-snackbar
      v-model="errorSnackbar"
      color="error"
    >
      {{ errorMessage }}

      <template v-slot:actions="{ attrs }">
        <v-btn
          variant="text"
          v-bind="attrs"
          @click="errorSnackbar = false; errorMessage = undefined"
        >
          OK
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import * as utils from './../utils.js'
import DialogConfirmEmail from './../components/auth/DialogConfirmEmail.vue'
import { mapActions, mapMutations } from "vuex"
import { useRules } from "vuetify/labs/rules"

export default {
  setup () {
    return {
      emailRules: useRules(() => [
        ["required", "Informe o e-mail"],
        ["email", "E-mail inválido"]
      ]),
      passwordRules: useRules(() => [
        ["required", "Informe a senha"]
      ])
    }
  },
  components: {
    DialogConfirmEmail
  },
  mounted () {
    const darkTheme = this.$vuetify.theme.dark
    utils.updateMetaTagTheme(darkTheme, '#ffb6c1ad')
  },
  data () {
    return {
      email: "",
      password: "",
      showPasswordClicked: false,
      errorSnackbar: false,
      errorMessage: undefined,
      badCredentialsError: "badCredentials",
      isFormValid: false,
      loadingLogin: false
    }
  },
  computed: {
    calculatedWidth () {
      switch (this.$vuetify.display.name) {
        case 'xs': return 290
        default: return 326
      }
    }
  },
  methods: {
    ...mapActions([
      "signin2",
      "checkTokenValidity"
    ]),
    ...mapMutations([
      "setAuthenticated"
    ]),
    redirectToNewAccount () {
      this.$router.push('/new-user2')
    },
    redirectToHome () {
      this.$router.push("/home")
    },
    login () {
      if (!this.isFormValid) {
        this.errorMessage = "Preencha o e-mail e a senha."
        this.errorSnackbar = true
        return 
      }
      this.loadingLogin = true
      const payload = {
        "email": this.email,
        "password": this.password
      }
      this.signin2(payload)
        .then((response) => {
          this.checkTokenValidity()
            .then((response) => {
              this.setAuthenticated(true)
              this.redirectToHome()
            })
            .catch((exception) => {
              const response = exception.response
              if (response.status === 401) {
                const error = this.badCredentialsError
                this.handleLoginErrors(error)
                console.log(exception)
              }
            })
        })
        .catch((exception) => {
          const response = exception.response
          if (response.status === 401) {
            const error = this.badCredentialsError
            this.handleLoginErrors(error)
            console.log(exception)
          }
          this.loadingLogin = false
        })
    },
    handleLoginErrors (error) {
      const errors = {
        badCredentials (self) {
          self.errorSnackbar = true
          self.errorMessage = "E-mail ou senha inválidos"
          return;
        },
        validationError (self) {
          self.errorSnackbar = true
          self.errorMessage = "Erro no formato da requisição"
          return;
        },
      }
      const errorHandlerFunction = errors[error]
      const self = this
      errorHandlerFunction(self)
    },
    showPassword () {
      // workaround for the issue #16109 from vuetify
      // https://github.com/vuetifyjs/vuetify/issues/16109#issuecomment-3124750075
      const $input = this.$refs.passwordField?.$el.querySelector("input")
      let { selectionStart, selectionEnd } = $input
      if (document.activeElement !== $input) {
        selectionStart = selectionEnd = $input.value.length
      }
      this.showPasswordClicked = !this.showPasswordClicked
      setTimeout(() => {
        $input.setSelectionRange(selectionStart, selectionEnd)
      })
    }
  }
}
</script>

<style scoped>
.div-logo {
  display: flex;
  height: 90px;
  margin: 0px 20px 16px;
}
.logo {
  width: 90px;
  margin: auto;
  cursor: pointer;
}
.login-title {
  margin: 0px 0 17px !important;
  text-align: center;
  color: #000000de;
  font-weight: 500;
  font-size: 18px;
}
form {
  margin-top: 20px;
}
</style>