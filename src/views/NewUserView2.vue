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
            id="email-field"
            variant="filled"
            :append-inner-icon="isEmailUnique===true ? 'mdi-emoticon-cool-outline' : isEmailUnique === '' ? 'mdi-emoticon-neutral-outline' : 'mdi-emoticon-sad-outline'"
            color="secondary"
            v-model="email"
            :rules="emailRules"
            required
            label="E-mail *"
            type="email"
            placeholder="exemplo@dominio.com"
            autocomple="off"
            @input="validateEmailDuplication()"
            :loading="validatingEmail"
            ref="emailField"
            :error-messages="emailErrorMessages"
          />

          <v-text-field
            style="margin-top: 10px"
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
            id="password-field"
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
          :userEmailProp="email"
          :passwordReset="false"
        />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex"
import * as utils from "./../utils.js"
import DialogConfirmEmail from "./../components/auth/DialogConfirmEmail.vue"
import { useRules } from "vuetify/labs/rules"

export default {
  setup () {
    return {
      // https://github.com/vuetifyjs/vuetify/issues/21552#issuecomment-2962825752
      // https://github.com/vuetifyjs/vuetify/issues/21477#issuecomment-3056764552
      emailRules: useRules(() => [
        // https://vuetifyjs.com/en/components/text-fields/#validation
        // https://vuejs.org/guide/essentials/reactivity-fundamentals
        // ["unique", isEmailUnique.value === false ? "Alguém já usa esse, você digitou correto?" : ""],
        // ["unique", "Alguém já usa esse, você digitou correto?"],
        ["required", "Informe o e-mail"],
        ["email", "E-mail inválido"]
      ]),
      passwordRules: useRules(() => [
        ["required", "Informe a senha"],
        ["minLength", 8, "Use 8 ou mais caracteres"],
        ["maxLength", 40, "Use até 40 caracteres"]
      ])
    }
  },
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
      showPasswordClicked: false,
      ongoingRequest: null,
      validatingEmail: false,
      isFormValid: false,
      isEmailUnique: "",
      emailErrorMessages: []
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
      this.isEmailUnique = ""
      this.emailErrorMessages = []
      if (!this.$refs.emailField?.isValid) {
        return
      }
      clearTimeout(this.ongoingRequest);
      this.validatingEmail = true
      this.ongoingRequest = setTimeout(() => {
        this.verifyDuplicatedEmail(this.email)
          .then((response) => {
            this.isEmailUnique = response.data.is_unique
            if (!this.isEmailUnique) {
              this.emailErrorMessages = [ 
                "Este e-mail já está em uso."
              ]
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