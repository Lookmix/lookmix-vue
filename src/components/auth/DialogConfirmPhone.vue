<template>
  <div>
    <v-btn
      :disabled="disabled"
      :style="{'margin-left': resetPassword ? '-3px' : 'unset' }"
      :text="resetPassword"
      small
      rounded
      :outlined="!resetPassword"
      :color="resetPassword ? '' : 'secondary'"
      :ripple="!resetPassword"
      @click.stop="dialog = true; !resetPassword ? phone = newUserPhone : false"
    >
      {{ resetPassword ? 'Recuperar senha' : 'CRIAR' }}
    </v-btn>

    <v-dialog
      persistent
      v-model="dialog"
      width="310"
    >
      <v-card
        elevation="0"
        v-if="dialog"
      >
        <v-card-title style="word-break: normal;">
          {{ resetPassword ? 'Recuperação de senha' : 'Confirmação de número' }}
        </v-card-title>

        <v-stepper 
          v-if="dialog"
          v-model="currentStep" 
          elevation="0"
          flat 
          height="400"
        >
          <v-stepper-header
            style="box-shadow: unset; display: none;"
          >
            <v-stepper-step
              color="accent"
              :complete="currentStep > 1"
              step="1"
            >
              Número telefonico
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              :complete="currentStep > 2"
              step="2"
              color="accent"
            >
              Código de confirmação
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step 
              :complete="currentStep > 3"
              step="3"
              color="accent"
            >
              {{ resetPassword ? 'Redefinição de senha' : 'Confirmação de número' }}
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <div style="display: flex; flex-direction: column; height: 280px;">
                <span>
                  Confira se número abaixo está correto.  
                  Vamos te enviar um código por SMS.
                </span>

                <br>

                <v-form 
                  v-model="formValid"
                  @submit="$event.preventDefault()"
                  autocomplete="off" 
                  style="padding-bottom: 30px; max-height: 116px;"
                >
                  <v-text-field
                    filled
                    v-model="phone"
                    autocomple="off"
                    color="secondary"
                    :rules="[rules.required, rules.phoneLength, rules.exists]"
                    label="Número do celular *"
                    type="tel"
                    placeholder="(00) 91234-5678"
                    v-mask="'(##) #####-####'"
                    :loading="validatingPhone"
                    hint="DDD e número"
                    persistent-hint
                    @keyup="rules.exists = true"
                  />
                </v-form>
              </div>

              <div style="display: flex; margin-top: 50px;">
                <v-btn 
                  text
                  small
                  rounded
                  @click="closeDialog()"
                >
                  Cancelar
                </v-btn>

                <v-spacer/>

                <v-btn
                  outlined
                  rounded
                  color="secondary"
                  small
                  :disabled="!formValid"
                  :loading="validatingPhone"
                  @click="getVerifyTokenOTP()"
                >
                  ENVIAR
                </v-btn>
              </div>
            </v-stepper-content>

            <v-stepper-content step="2">
              <div style="display: flex; flex-direction: column; height: 280px;">
                <span>
                  Informe o código de seis dígitos abaixo, antes que o tempo acabe
                </span>

                <br>

                <span>
                  tempo restante: <strong> {{ timer }} </strong> segundos
                </span>

                <br>

                <v-form 
                  v-model="formValid2"
                  @submit="$event.preventDefault()"
                  autocomplete="off" 
                  style="padding-bottom: 30px; max-height: 116px;"
                >
                  <v-otp-input
                    ref="otpInput"
                    v-model="validationCode"
                    required
                    length="6"
                    plain
                    color="secondary"
                    type="number"
                    :rules="[
                      rulesValidationCode.required, 
                      rulesValidationCode.codeLength,
                      rulesValidationCode.codeError
                    ]"
                  />

                  <div 
                    class="red--text"
                    :style="{
                      'font-size': '12px',
                      'padding': $refs.otpInput && $refs.otpInput.messagesToDisplay[0] ? '0px' : '9px',
                      'color': $refs.otpInput ? 'unset' : 'transparent'
                    }"
                  >
                    {{ $refs.otpInput ? $refs.otpInput.messagesToDisplay[0] : '' }}
                  </div>

                  <div>
                    <br>
                    <br>
                    <span>
                      Não recebeu o código ou o tempo acabou?
                    </span>

                    <v-btn 
                      outlined 
                      rounded 
                      x-small 
                      :ripple="false" 
                      text 
                      color="secondary"
                      @click="currentStep = 1; clearTimer(); clearOTPInput();"
                    >
                      REENVIAR
                    </v-btn>
                  </div>
                </v-form>

                <br>
              </div>

              <div style="display: flex; margin-top: 50px;">
                <v-spacer/>

                <v-btn
                  outlined
                  rounded
                  color="secondary"
                  small
                  :loading="sendingOTP"
                  :disabled="!formValid2 || timer === 0"
                  @click="sendOTP();"
                >
                  AVANÇAR
                </v-btn>
              </div>
            </v-stepper-content>

            <v-stepper-content step="3">
              <div
                style="display: flex; flex-direction: column; height: 280px;"
              >
                <template 
                  v-if="resetPassword"
                >
                  <span>
                    Crie sua nova senha
                  </span>

                  <br>

                </template>

                <template v-else>
                  <span>
                    Número verificado com sucesso
                  </span>

                  <br>

                  <v-icon
                    size="145"
                    color="green"
                  >
                    mdi-check-circle
                  </v-icon>
                </template>
              </div>

              <div style="display: flex; margin-top: 50px;">
                <v-btn text small rounded @click="currentStep = 2">
                  Voltar
                </v-btn>

                <v-spacer/>

                <v-btn
                  small
                  color="secondary"
                  @click="currentStep = 1"
                  rounded
                  outlined
                >
                  Concluir
                </v-btn>
              </div>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card>
    </v-dialog>

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
import { mapActions } from 'vuex';

export default {
  directives: { mask },
  props: [
    "resetPassword",
    "newUserPhone",
    "disabled"
  ],
  data () {
    return {
      formValid: false,
      formValid2: false,
      currentStep: 1,
      dialog: false,
      rules: {
        required: value => !!value || 'O número do celular deve ser preenchido',
        phoneLength: value => value && value.length < 15 ? 'O número está incorreto' : true,
        exists: true
      },
      rulesValidationCode: {
        required: value => !!value || 'Preencha os 6 dígitos',
        codeLength: value => value && value.length < 6 ? 'O código está incompleto' : true,
        codeError: true
      },
      validatingPhone: false,
      validatingCode: false,
      phone: undefined,
      validationCode: undefined,
      timer: 80,
      interval: undefined,
      verifyTokenData: undefined,
      errorMessage: undefined,
      errorSnackbar: false,
      sendingOTP: false
    }
  },
  methods: {
    ...mapActions([
      "verifyDuplicatedPhone",
      "getVerifyToken",
      "sendVerifyCode"
    ]),
    validatePhoneDuplication (getVerifyTokenOTP=false) {
      this.validatingPhone = true
      this.rules.unique = true

      clearTimeout(this.ongoingRequest);

      let phone = this.phone.replace(/\D/g, '')

      return this.verifyDuplicatedPhone(phone)
        .then((response) => {
          const isUnique = response.data.is_unique

          // if reset password, phone must exists
          if (isUnique && this.resetPassword) {
            this.rules.exists = "Não encontramos esse número na base de dados"
            return;
          } 
          // if creating new account, phone should not exists
          else if (!isUnique && !this.resetPassword) {
            this.rules.exists = "Esse número já existe no Lookmix, não é possível criar outra conta com este número"
            return;
          }
          if (getVerifyTokenOTP) {
            return this.getVerifyToken(phone)
              .then((response) => {
                const data = response.data

                this.verifyTokenData = data

                this.goToStep2()
              })
              .catch((exception) => {
                const error = exception.response.data.error
                this.errorSnackbar = true
                this.errorMessage = error
                console.log(error)
              })
          }
          this.goToStep2()
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.validatingPhone = false
        })
    },
    closeDialog () {
      this.phone = ""
      this.dialog = false
      this.clearTimer(this.interval)
    },
    clearTimer (timer) {
      if (!timer) {
        this.timer = 80
      }
      clearInterval(this.interval)
    },
    setTimer () {
      const self = this

      this.interval = setInterval(function () {
        self.timer = self.timer - 1

        if (self.timer < 1) {
          self.clearTimer(true)
        }
      }, 1000)
    },
    getVerifyTokenOTP () {
      this.validatePhoneDuplication(true)
    },
    sendOTP () {
      this.sendingOTP = true

      let data = {
        id: this.verifyTokenData.id,
        verify_token: this.verifyTokenData.verify_token,
        code: this.validationCode
      }
      return this.sendVerifyCode(data)
        .then((response) => {
          const data = response.data

          if (data.valid) {
            this.currentStep = 3
            return;
          }
        })
        .catch((exception) => {
          const error = exception.response.data.error

          this.handleOTPErrors(error)

          console.log(exception)
        })
        .finally(() => {
          this.sendingOTP = false
        })
    },
    goToStep2 () {
      this.currentStep = 2

      this.setTimer()
    },
    handleOTPErrors (error) {
      const errors = {
        validationError (self) {
          self.errorSnackbar = true
          self.errorMessage = "Erro no formato da requisição"
          self.clearOTPInput()
          return;
        },
        attempsExceed (self) { 
          self.rulesValidationCode.codeError = "Suas tentativas esgoratam. Toque em reenviar para receber um novo código."
          self.clearOTPInput()
          return;
        },
        invalidOTP (self) {
          self.rulesValidationCode.codeError = "Código inválido, tente novamente."
          self.clearOTPInput()
          return;       
        },
        expired (self) {
          self.rulesValidationCode.codeError = "Código expirado. Toque em reenviar para receber um novo código."
          self.clearOTPInput()
          return;
        }
      }
      const errorHandlerFunction = errors[error]
      const self = this

      errorHandlerFunction(self)
    },
    clearOTPInput () {
      this.$refs.otpInput.otp = []
      this.$refs.otpInput.errorBucket = []
      this.formValid2 = false
    }
  }
}
</script>

<style scoped>

</style>