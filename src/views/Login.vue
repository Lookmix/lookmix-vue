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
            color="secondary"
            v-model="phone"
            :rules="[rules.required, rules.phoneLength]"
            required
            label="Número do celular *"
            type="tel" 
            placeholder="(00) 91234-5678"
            v-mask="'(##) #####-####'"
            hint="DDD e número"
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
              color="accent"
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
              <DialogConfirmPhone 
                :userPhoneComponentParam="phone" 
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
import DialogConfirmPhone from './../components/auth/DialogConfirmPhone.vue'
import { mapActions } from "vuex"

export default {
  components: {
    DialogConfirmPhone
  },
  directives: { mask },
  mounted () {
    const darkTheme = this.$vuetify.theme.dark

    utils.updateMetaTagTheme(darkTheme, '#ffb6c1ad')
  },
  data () {
    return {
      phone: "",
      password: "",
      showPassword: false,
      rules: {
        required: value => !!value || 'O número do celular deve ser preenchido',
        requiredPassword: value => !!value || 'A senha deve ser preenchida',
        phoneLength: value => value && value.length < 15 ? 'O número está incorreto' : true,
      },
      errorSnackbar: false,
      errorMessage: undefined
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
      "signin"
    ]),
    redirectToNewAccount () {
      this.$router.push('/new-user')
    },
    redirectToHome () {
      this.$router.push("/home")
    },
    login () {
      const phone = utils.formatPhoneToOnlyDigits(this.phone)
      const payload = {
        "phone": phone,
        "password": this.password
      }
      this.signin(payload)
        .then((response) => {
          this.redirectToHome()
        })
        .catch((exception) => {
          const response = exception.response

          if (response) {
            const error = response.data.error
  
            this.handleLoginErrors(error)
  
            console.log(exception)
          }
        })
    },
    handleLoginErrors (error) {
      const errors = {
        badCredencials (self) {
          self.errorSnackbar = true
          self.errorMessage = "Número telefônico ou senha inválidos"
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