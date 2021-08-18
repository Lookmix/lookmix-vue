<template>
  <div>
    <v-dialog
      v-model="dialog"
      width="310"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          text
          small
          rounded
          :ripple="false"
        >
          Recuperar senha
        </v-btn>
      </template>

      <v-card
        elevation="0"
      >
        <v-card-title>
          {{ title }}
        </v-card-title>

        <v-stepper 
          v-model="e1" 
          elevation="0" 
          flat 
          height="400"
        >
          <v-stepper-header
            style="box-shadow: unset;"
          >
            <v-stepper-step
              color="accent"
              :complete="e1 > 1"
              step="1"
            >
              Número telefonico
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              :complete="e1 > 2"
              step="2"
              color="accent"
            >
              Código de confirmação
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step 
              step="3"
              color="accent"
            >
              Redefinição de senha
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <div style="display: flex; flex-direction: column">
                <span>
                  Digite seu número telefonico abaixo. 
                  Vamos te enviar um código por SMS.
                </span>

                <br>

                <form 
                  novalidate
                  action=""
                  autocomplete="off" 
                  style="padding-bottom: 30px; max-height: 116px;"
                >
                  <v-text-field
                    filled
                    color="secondary"
                    v-model="phone"
                    :rules="[rules.required, rules.phoneLength, rules.exists]"
                    required
                    label="Número do celular *"
                    type="tel"
                    placeholder="(00) 91234-5678"
                    v-mask="'(##) #####-####'"
                    hint="DDD e número"
                    persistent-hint
                    @keyup="rules.exists = true"
                    :loading="validatingPhone"
                  />
                </form>
              </div>

              <div style="display: flex;">
                <v-btn 
                  text
                  small
                  rounded
                  @click="dialog = false"
                >
                  Cancelar
                </v-btn>

                <v-spacer/>

                <v-btn
                  text
                  rounded
                  color="secondary"
                  small
                  @click="validatePhoneDuplication()"
                >
                  Próximo
                </v-btn>
              </div>
            </v-stepper-content>

            <v-stepper-content step="2">
              <div>
              </div>

              <div style="display: flex;">
                <v-btn 
                  text
                  small
                  rounded
                  @click="el = 0"
                >
                  Voltar
                </v-btn>

                <v-spacer/>

                <v-btn
                  text
                  rounded
                  color="secondary"
                  small
                >
                  Próximo
                </v-btn>
              </div>
            </v-stepper-content>

            <v-stepper-content step="3">
              <div>
              </div>

              <v-btn
                color="primary"
                @click="e1 = 1"
              >
                Continue
              </v-btn>

              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'
import { mapActions } from 'vuex';

export default {
  directives: { mask },
  data () {
    return {
      e1: 1,
      title: "Recuperação de senha",
      dialog: false,
      rules: {
        required: value => !!value || 'O número do celular deve ser preenchido',
        phoneLength: value => value && value.length < 15 ? 'O número está incorreto' : true,
        exists: true
      },
      validatingPhone: false,
      phone: undefined
    }
  },
  methods: {
    ...mapActions([
      "verifyDuplicatedPhone"
    ]),
    validatePhoneDuplication () {
      this.validatingPhone = true
      this.rules.unique = true

      clearTimeout(this.ongoingRequest);

      let phone = this.phone.replace(/\D/g, '')

      this.verifyDuplicatedPhone(phone)
        .then((response) => {
          const notExists = response.data.is_unique

          if (notExists) {
            this.rules.exists = "Não encontramos esse número na base de dados"
          } else {
            this.e1 = 2
          }
        })
        .catch((error)=> {
          console.log(error)
        })
        .finally(() => {
          this.validatingPhone = false
        })
    }
  }
}
</script>

<style scoped>

</style>