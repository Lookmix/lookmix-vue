<template>
  <div
    style="margin-top: 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      background: #ffb6c1ad;"
  >
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

            <v-btn
              style="width: 150px; margin: 15px auto auto auto;"
              text
              small
              rounded
              :ripple="false"
            >
              Recuperar senha
            </v-btn>
          </div>


        </form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'
import * as utils from './../utils.js'

export default {
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
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
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
    redirectToNewAccount () {
      this.$router.push('/new-user')
    },
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