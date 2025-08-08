<!-- uses email instead phone -->

<template>
  <div>
    <v-card
      style="margin: auto;"
      elevation="3"
      rounded="shaped"
      :width="width"
    >
      <v-card-text>
        <div class="div-logo">
          <img
            src="../assets/hanger-light-clean.svg"
            class="hide-select-drag-effect logo"
          />
        </div>

        <h3 class="newAccount-title">Crie sua conta gratuita</h3>

        <v-form autocomplete="off" v-model="isFormValid">
          <v-text-field
            variant="filled"
            :append-icon="isEmailUnique ? 'mdi-emoticon-cool-outline' : isEmailUnique === undefined ? 'mdi-emoticon-neutral-outline' : 'mdi-emoticon-sad-outline'"
            color="secondary"
            v-model="email"
            :rules="[rules.required, rules.unique]"
            required
            label="E-mail *"
            type="email"
            placeholder="exemplo@dominio.com"
            autocomple="off"
            @keyup="validateEmailDuplication()"
            :loading="validatingEmail"
          />

          <v-text-field
            style="margin-top: 10px"
            variant="filled"
            color="secondary"
            v-model="password"
            required
            :rules="[rules.requiredPassword, rules.passwordLength]"
            :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            :type="showPassword ? 'text' : 'password'"
            label="Senha *"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn variant="text" rounded @click="redirectToLogin">
          VOLTAR
        </v-btn>

        <v-spacer></v-spacer>

        <DialogConfirmEmail
          @opened="setNewUserState()"
          :disabled="!isFormValid || validatingEmail"
          :userEmailComponentParam="email"
          :resetPassword="false"
        />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import * as utils from './../utils.js'
import DialogConfirmEmail from './../components/auth/DialogConfirmEmail.vue'

export default {
  components: {
    DialogConfirmEmail
  },
  mounted() {
    const darkTheme = this.$vuetify.theme.dark;

    utils.updateMetaTagTheme(darkTheme, "#8341a1d4");
  },
  data () {
    return {
      email: "",
      password: "",
      showPassword: false,
      rules: {
        required: value => !!value || 'O número do celular deve ser preenchido',
        requiredPassword: value => !!value || 'A senha deve ser preenchida',
        passwordLength: value => value && value.length < 8 ? 'A senha deve ter pelo menos 8 dígitos' : true,
        unique: true
      },
      ongoingRequest: null,
      isEmailUnique: undefined,
      validatingEmail: false,
      isFormValid: false
    }
  },
  computed: {
    width () {
      switch (this.$vuetify.display.name) {
        case 'xs': return 290
        default: return 326
      }
    }
  },
  methods: {
    ...mapActions([
      "verifyDuplicatedEmail"
    ]),
    ...mapMutations([
      "setNewUser"
    ]),
    redirectToLogin () {
      this.$router.push('/login2')
    },
    validateEmailDuplication () {
      this.validatingEmail = true
      this.isEmailUnique = undefined
      this.rules.unique = true
      clearTimeout(this.ongoingRequest);
      this.ongoingRequest = setTimeout(() => {
        this.verifyDuplicatedEmail(this.email)
          .then((response) => {
            this.isEmailUnique = response.data.is_unique
            if (!this.isEmailUnique) {
              this.rules.unique = "Alguém já usa esse, você digitou correto?"
            }
          })
          .catch((error)=> {
            console.log(error)
          })
          .finally(() => {
            this.validatingEmail = false
          })
      }, 3000);
    },
    setNewUserState () {
      if (this.isFormValid && !this.validatingEmail) { // !this.validatingEmail) {
        const email = this.email
        const user = {
          email: email,
          password: this.password
        }
        this.setNewUser(user)
      }
    }
  }
};
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
.newAccount-title {
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