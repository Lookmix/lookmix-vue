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
          <div class="div-form">
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
          </div>
        </form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  directives: { mask },
  data () {
    return {
      phone: undefined,
      rules: {
        required: value => !!value || 'O número do celular deve ser preenchido',
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
.div-form {
  margin-top: 20px;
}
</style>