<template>
  <div>
    <v-card
      style="margin: auto;"
      elevation="3"
      shaped
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
            @keyup="validatePhoneDuplication()"
            :loading="validatingPhone"
          />

          <v-text-field
            style="margin-top: 10px"
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
        </form>
      </v-card-text>

      <v-card-actions>
        <v-btn text rounded @click="redirectToLogin">
          VOLTAR
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn rounded outlined color="secondary" disabled>
          CRIAR
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'
import { mapActions } from 'vuex';
import * as utils from './../utils.js'

export default {
  directives: { mask },
  mounted() {
    const darkTheme = this.$vuetify.theme.dark;

    utils.updateMetaTagTheme(darkTheme, "#8341a1d4");
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
      ongoingRequest: null,
      isDuplicatedPhone: false,
      validatingPhone: false
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
      "verifyDuplicatedPhone"
    ]),
    redirectToLogin () {
      this.$router.push('/login')
    },
    validatePhoneDuplication () {
      this.validatingPhone = true

      clearTimeout(this.ongoingRequest);

      this.ongoingRequest = setTimeout(() => {
        this.verifyDuplicatedPhone()
        .then((response) => {
          this.isDuplicatedPhone = response.data;
        })
        .catch((error)=> {
          console.log(error)
        })
        .finally(() => {
          this.validatingPhone = false
        })
      }, 3000);
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