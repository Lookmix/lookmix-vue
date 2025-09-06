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
            :append-icon="isPhoneUnique ? 'mdi-emoticon-cool-outline' : isPhoneUnique === undefined ? 'mdi-emoticon-neutral-outline' : 'mdi-emoticon-sad-outline'"
            color="secondary"
            v-model="phone"
            :rules="[rules.required, rules.phoneLength, rules.unique]"
            required
            label="Número do celular *"
            type="tel"
            placeholder="(00) 91234-5678"
            v-mask="'(##) #####-####'"
            hint="DDD e número"
            persistent-hint
            @keyup="validatePhoneDuplication()"
            :loading="validatingPhone"
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

        <DialogConfirmPhone 
          @opened="setNewUserState()"
          :disabled="!isFormValid || validatingPhone"
          :userPhoneComponentParam="phone" 
          :resetPassword="false"
        />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'
import { mapActions, mapMutations } from 'vuex';
import * as utils from './../utils.js'
import DialogConfirmPhone from './../components/auth/DialogConfirmPhone.vue'

export default {
  components: {
    DialogConfirmPhone
  },
  directives: { mask },
  mounted() {
    utils.updateMetaTagTheme("#9861b1");
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
        passwordLength: value => value && value.length < 8 ? 'A senha deve ter pelo menos 8 dígitos' : true,
        unique: true
      },
      ongoingRequest: null,
      isPhoneUnique: undefined,
      validatingPhone: false,
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
      "verifyDuplicatedPhone",
    ]),
    ...mapMutations([
      "setNewUser"
    ]),
    redirectToLogin () {
      this.$router.push('/login')
    },
    validatePhoneDuplication () {
      this.validatingPhone = true
      this.isPhoneUnique = undefined
      this.rules.unique = true

      clearTimeout(this.ongoingRequest);

      this.ongoingRequest = setTimeout(() => {
        let phone = utils.formatPhoneToOnlyDigits(this.phone)

        this.verifyDuplicatedPhone(phone)
          .then((response) => {
            this.isPhoneUnique = response.data.is_unique

            if (!this.isPhoneUnique) {
              this.rules.unique = "Alguém já usa esse, você digitou correto?"
            }
          })
          .catch((error)=> {
            console.log(error)
          })
          .finally(() => {
            this.validatingPhone = false
          })
      }, 3000);
    },
    setNewUserState () {
      if (this.isFormValid && !this.validatingPhone) {
        const phone = utils.formatPhoneToOnlyDigits(this.phone)

        const user = {
          phone: phone,
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