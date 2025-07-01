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
      @click.stop="dialog = true; email = userEmailComponentParam; !resetPassword ? onOpenDialog() : false"
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
          {{ resetPassword ? 'Recuperação de senha' : 'Confirmação de e-mail' }}
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
              color="primary"
              :complete="currentStep > 1"
              step="1"
            >
              E-mail
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              :complete="currentStep > 2"
              step="2"
              color="primary"
            >
              Código de confirmação
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step 
              :complete="currentStep > 3"
              step="3"
              color="primary"
            >
              Redefinição de senha
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              :complete="currentStep > 4"
              step="3"
              color="primary"
            >
              Confirmação de e-mail
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <div style="display: flex; flex-direction: column; height: 280px;">
                <span>
                  <template v-if="!resetPassword">
                    Confira se o endereço de e-mail abaixo está correto e corrija se necessário.  
                    Vamos te enviar um código através dele.
                  </template>

                  <template v-if="resetPassword && userEmailComponentParam">
                    Confira se o endereço de e-mail abaixo está correto e corrija se necessário.  
                    Vamos te enviar um código através dele.
                  </template>

                  <template v-if="resetPassword && !userEmailComponentParam">
                    Informe seu e-mail abaixo. Vamos te enviar um código através dele.
                  </template>
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
                    v-model="email"
                    required
                    autocomple="off"
                    color="secondary"
                    :rules="[
                      rules.required, 
                      rules.exists
                    ]"
                    label="E-mail *"
                    type="email"
                    placeholder="exemplo@dominio.com"
                    :loading="validatingEmail"
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
                  :loading="validatingEmail"
                  @click="getOTP()"
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
                    :disabled="disableOTPInput || sendingOTP"
                    @input="rulesOTPValidation.codeError = true"
                    :rules="[
                      rulesOTPValidation.required, 
                      rulesOTPValidation.codeLength,
                      rulesOTPValidation.codeError
                    ]"
                  />

                  <div 
                    class="red--text"
                    :style="{
                      'min-height': '36px',
                      'font-size': '12px',
                      'padding': $refs.otpInput && $refs.otpInput.messagesToDisplay[0] ? '0px' : '18px',
                      'color': $refs.otpInput ? 'unset' : 'transparent'
                    }"
                  >
                    {{ $refs.otpInput ? $refs.otpInput.messagesToDisplay[0] : '' }}
                  </div>

                  <div>
                    <br>

                    <span>
                      Não recebeu o código ou o tempo / tentativas acabaram? 
                    </span>

                    <v-btn 
                      outlined 
                      rounded 
                      x-small 
                      :ripple="false" 
                      text 
                      color="#651FFF"
                      :disabled="sendingOTP || (timer > 0 && !attempsExceed)"
                      @click="currentStep = 1; clearTimer(); clearOTPInput(); attempsExceed = false;"
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
                  :disabled="!formValid2 || timer === 0 || attempsExceed"
                  @click="sendOTPCode();"
                >
                  AVANÇAR
                </v-btn>
              </div>
            </v-stepper-content>

            <v-stepper-content step="3">
              <div
                style="display: flex; flex-direction: column; height: 280px;"
              >
                <span>
                  Crie sua nova senha
                </span>

                <br>

                <v-form
                  v-model="formValid3"
                  @submit="$event.preventDefault()"
                  autocomplete="off" 
                  style="padding-bottom: 30px; max-height: 116px;"
                >
                  <v-text-field
                    style="margin-top: 10px"
                    filled
                    color="secondary"
                    v-model="newPassword"
                    required
                    :rules="[
                      rules.requiredPassword, 
                      rules.passwordLength,
                      rules.exists
                    ]"
                    :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="showPassword ? 'text' : 'password'"
                    label="Nova senha *"
                    :disabled="sendingNewPassword"
                    @keyup="rules.exists = true"
                    @click:append="showPassword = !showPassword"
                  />
                </v-form>
              </div>

              <div style="display: flex; margin-top: 50px;">
                <v-spacer/>

                <v-btn
                  outlined
                  rounded
                  color="secondary"
                  small
                  :loading="sendingNewPassword"
                  @click="saveNewPassword()"
                >
                  AVANÇAR
                </v-btn>
              </div>
            </v-stepper-content>

            <v-stepper-content step="4">
              <div
                style="display: flex; flex-direction: column; height: 280px;"
              >
                <v-icon
                  size="145"
                  color="green"
                >
                  mdi-check-circle
                </v-icon>

                <br>

                <span>
                  {{ resetPassword ?  
                    "Senha atualizada com sucesso!" :
                    "Concluímos a verificação do seu e-mail!"
                  }}
                </span>

                <br>

                <span>
                  Você já pode entrar na sua conta :)
                </span>
              </div>

              <div style="display: flex; margin-top: 50px;">
                <v-spacer/>

                <v-btn
                  small
                  color="secondary"
                  @click="resetPassword ? closeDialog() : redirectToHome()"
                  rounded
                  outlined
                >
                  Entrar
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
import * as utils from './../../utils.js'

export default {
  directives: { mask },
  props: [
    "resetPassword",
    "userEmailComponentParam",
    "disabled"
  ],
  data () {
    return {
      formValid: false,
      formValid2: false,
      formValid3: false,
      currentStep: 1,
      dialog: false,
      rules: {
        required: value => !!value || 'O e-mail deve ser preenchido',
        exists: true,
        requiredPassword: value => !!value || 'A senha deve ser preenchida',
        passwordLength: value => value && value.length < 8 ? 'A senha deve ter pelo menos 8 dígitos' : true,
      },
      rulesOTPValidation: {
        required: value => !!value || 'Preencha os 6 dígitos',
        codeLength: value => value && value.length < 6 ? 'O código está incompleto' : true,
        codeError: true
      },
      validatingEmail: false,
      validatingCode: false,
      email: undefined,
      validationCode: undefined,
      timer: 80,
      interval: undefined,
      OTPData: undefined,
      errorMessage: undefined,
      errorSnackbar: false,
      sendingOTP: false,
      disableOTPInput: false,
      attempsExceed: false,
      newPassword: undefined,
      showPassword: false,
      sendingNewPassword: false,
      duplicatedEmailMsg: "Esse e-mail já existe no Lookmix, não é possível criar outra conta com este e-mail",
      emailNotFoundMsg: "Não encontramos seu e-mail na base de dados"
    }
  },
  methods: {
    ...mapActions([
      "verifyDuplicatedEmail",
      "getOTPData2",
      "sendOTP",
      "updatePassword",
      "saveUser2"
    ]),
    validateEmailDuplication (getOTP=false) {
      this.validatingEmail = true
      this.rules.exists = true
      clearTimeout(this.ongoingRequest);
      const email = encodeURI(this.email)
      return this.verifyDuplicatedEmail(email)
        .then((response) => {
          const isUnique = response.data.is_unique
          // if reset password, email must exists
          if (isUnique && this.resetPassword) {
            this.rules.exists = this.emailNotFoundMsg
            return;
          } 
          // if creating new account, email should not exists
          else if (!isUnique && !this.resetPassword) {
            this.rules.exists = this.duplicatedEmailMsg
            return;
          }
          if (getOTP) {
            const email = encodeURI(this.email)
            return this.getOTPData2(email)
              .then((response) => {
                const data = response.data
                this.OTPData = data
                this.goToStep2()
              })
              .catch((exception) => {
                const response = exception.response
                if (response) {
                  const error = response.data.error
                  this.errorSnackbar = true
                  this.errorMessage = error
                  console.log(error)
                }
              })
          }
          this.goToStep2()
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.validatingEmail = false
        })
    },
    closeDialog () {
      this.clearTimer()
      this.email = ""
      this.dialog = false
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
    getOTP () {
      this.validateEmailDuplication(true)
      this.clearOTPInput()
    },
    sendOTPCode () { // saveUser2 too
      this.sendingOTP = true

      let data = {
        id: this.OTPData.id,
        token: this.OTPData.token,
        code: this.validationCode
      }
      return this.sendOTP(data)
        .then((response) => {
          const data = response.data

          if (data.valid) {
            if (this.resetPassword) {
              this.currentStep = 3
              return;
            }
            return this.saveUser2()
              .then((response) => {
                this.currentStep = 4
                return;
              })
              .catch((exception) => {
                const response = exception.response

                if (response) {
                  const error = response.data.error
        
                  this.handleSaveUserErrors(error)
        
                  console.log(exception)
                }
              })
          }
        })
        .catch((exception) => {
          const response = exception.response

          if (response) {
            const error = response.data.error
  
            this.handleOTPErrors(error)
  
            console.log(exception)
          }
        })
        .finally(() => {
          this.sendingOTP = false
          // this.clearOTPInput()
        })
    },
    goToStep2 () {
      this.disableOTPInput = false

      this.currentStep = 2

      this.setTimer()
    },
    handleOTPErrors (error) {
      const errors = {
        validationError (self) {
          self.clearOTPInput()
          self.errorSnackbar = true
          self.errorMessage = "Erro no formato da requisição"
          return;
        },
        attempsExceed (self) { 
          self.clearOTPInput()
          self.OTPData.id = null
          self.OTPData.token = null
          self.rulesOTPValidation.codeError = "Suas tentativas esgoratam. Toque em reenviar para receber um novo código."
          self.disableOTPInput = true
          self.attempsExceed = true
          return;
        },
        invalidOTP (self) {
          self.clearOTPInput()
          self.rulesOTPValidation.codeError = "Código inválido, tente novamente."
          return;       
        },
        expired (self) {
          self.clearOTPInput()
          self.rulesOTPValidation.codeError = "Código expirado. Toque em reenviar para receber um novo código."
          self.disableOTPInput = true
          return;
        }
      }
      const errorHandlerFunction = errors[error]
      const self = this

      errorHandlerFunction(self)
    },
    handleSaveUserErrors (error) {
      const errors = {
        validationError (self) {
          self.errorSnackbar = true
          self.errorMessage = "Erro no formato da requisição"
          return;
        },
        duplicatedEmail (self) { 
          self.errorSnackbar = true
          self.errorMessage = self.duplicatedEmailMsg
          return;
        },
        unknow (self) {
          self.errorSnackbar = true
          self.errorMessage = "Falha ao tentar criar conta"
          return;       
        },
      }
      const errorHandlerFunction = errors[error]
      const self = this

      errorHandlerFunction(self)
    },
    handleResetPasswordErrors (error) {
      const errors = {
        emailNotFound (self) {
          self.rules.exists = this.emailNotFoundMsg
          return;
        },
        unknow (self) {
          self.errorSnackbar = true
          self.errorMessage = "Falha ao tentar atualizar senha"
          return;       
        },
      }
      const errorHandlerFunction = errors[error]
      const self = this

      errorHandlerFunction(self)
    },
    clearOTPInput () {
      this.$refs.otpInput.otp = []
      this.$refs.otpInput.errorBucket = []
      this.formValid2 = false
    },
    onOpenDialog () {
      this.$emit("opened", true)
    },
    redirectToLogin () {
      this.closeDialog()
      this.$router.push('/login')
      this.currentStep = 1
    },
    redirectToHome () {
      this.closeDialog()
      this.$router.push('/home')
      this.currentStep = 1
    },
    saveNewPassword () {
      this.sendingNewPassword = true
      const payload = {
        email: this.email,
        password: this.newPassword
      }
      this.updatePassword(payload)
        .then((response) => {
          this.currentStep = 4
        })
        .catch((exception) => {
          const response = exception.response

          if (response) {
            const error = response.data.error
  
            this.handleResetPasswordErrors(error)
  
            console.log(exception)
          }
        }) 
        .finally(() => {
          this.newPassword = undefined
        })
    }
  }
}
</script>

<style scoped>

</style>