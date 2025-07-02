<template>
  <div>
    <v-card    
      style="margin: auto; height: 530px;"
      elevation="3"
      shaped
      :width="width"
    >
      <v-card-text>
        <div class="div-logo">
          <img src="../assets/hanger-light-clean.svg" class="hide-select-drag-effect logo" />
        </div>
        
        <h3 class="login-title"> Entre na sua conta </h3>

        <form autocomplete="off">
          <v-text-field
            filled
            v-model="email"
            color="secondary"
            :rules="[ rules.required ]"
            required
            label="E-mail *"
            type="email"
            placeholder="exemplo@dominio.com"
            persistent-hint
          />

          <v-text-field
            style="margin-top: 10px;"
            filled
            color="secondary"
            v-model="password"
            required
            :rules="[rules.requiredPassword]"
            :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            :type="showPassword ? 'text' : 'password'"
            label="Senha *"
            @click:append="showPassword = !showPassword"
          />

          <div style="display: flex; flex-direction: column; margin-top: 10px;">
            <v-btn
              style="margin: auto; width: 160px;"
              color="secondary"
              elevation="2"
              rounded
              x-large
              @click="login()"
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
              text
              rounded
              small
              @click="redirectToNewAccount()"
            >
              Criar uma conta
            </v-btn>

            <div
              style="width: 150px; margin: 15px auto auto auto;"
            >
              <DialogConfirmEmail
                :userEmailComponentParam="email" 
                :resetPassword="true"
              />
            </div>
          </div>
        </form>
      </v-card-text>
    </v-card>

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
import { mask } from 'vue-the-mask'
import * as utils from './../utils.js'
import DialogConfirmEmail from './../components/auth/DialogConfirmEmail.vue'
import { mapActions, mapMutations } from "vuex"

export default {
  components: {
    DialogConfirmEmail
  },
  directives: { mask },
  mounted () {
    const darkTheme = this.$vuetify.theme.dark
    utils.updateMetaTagTheme(darkTheme, '#ffb6c1ad')
  },
  data () {
    return {
      email: "",
      password: "",
      showPassword: false,
      rules: {
        required: value => !!value || 'O e-mail deve ser preenchido',
        requiredPassword: value => !!value || 'A senha deve ser preenchida',
      },
      errorSnackbar: false,
      errorMessage: undefined,
      badCredentialsError: "badCredentials"
    }
  },
  computed: {
    width () {
      switch (this.$vuetify.breakpoint.name) {
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