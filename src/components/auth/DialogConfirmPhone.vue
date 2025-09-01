<template>
  <div>
    <v-btn
      :disabled="disabled"
      :style="{'margin-left': resetPassword ? '-3px' : 'unset' }"
      :text="resetPassword"
      size="small"
      rounded
      :variant="!resetPassword ? 'outlined' : 'default'"
      :color="resetPassword ? '' : 'secondary'"
      :ripple="!resetPassword"
      @click.stop="dialog = true; phone = userPhoneComponentParam; !resetPassword ? onOpenDialog() : false"
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
            <v-stepper-item
              color="primary"
              :complete="currentStep > 1"
              step="1"
            >
              Número telefonico
            </v-stepper-item>

            <v-divider></v-divider>

            <v-stepper-item
              :complete="currentStep > 2"
              step="2"
              color="primary"
            >
              Código de confirmação
            </v-stepper-item>

            <v-divider></v-divider>

            <v-stepper-item 
              :complete="currentStep > 3"
              step="3"
              color="primary"
            >
              Redefinição de senha
            </v-stepper-item>

            <v-divider></v-divider>

            <v-stepper-item
              :complete="currentStep > 4"
              step="3"
              color="primary"
            >
              Confirmação de número
            </v-stepper-item>
          </v-stepper-header>

          <v-stepper-item>
            <v-stepper-content step="1">
              <div style="display: flex; flex-direction: column; height: 280px;">
                <span>
                  <template v-if="!resetPassword">
                    Confira se o número abaixo está correto e corrija se necessário.  
                    Vamos te enviar um código por SMS.
                  </template>

                  <template v-if="resetPassword && userPhoneComponentParam">
                    Confira se o número abaixo está correto e corrija se necessário.  
                    Vamos te enviar um código por SMS.
                  </template>

                  <template v-if="resetPassword && !userPhoneComponentParam">
                    Informe seu número abaixo. Vamos te enviar um código por SMS.
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
                    variant="filled"
                    v-model="phone"
                    autocomple="off"
                    color="secondary"
                    :rules="[
                      rules.required, 
                      rules.phoneLength, 
                      rules.exists
                    ]"
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
                  variant="text"
                  size="small"
                  rounded
                  @click="closeDialog()"
                >
                  Cancelar
                </v-btn>

                <v-spacer/>

                <v-btn
                  variant="outlined"
                  rounded
                  color="secondary"
                  size="small"
                  :disabled="!formValid"
                  :loading="validatingPhone"
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
                    variant="plain"
                    color="secondary"
                    type="number"
                    :disabled="disableOTPInput || sendingOTP"
                    @update:model-value="rulesOTPValidation.codeError = true"
                    :rules="[
                      rulesOTPValidation.required, 
                      rulesOTPValidation.codeLength,
                      rulesOTPValidation.codeError
                    ]"
                  />

                  <div 
                    class="text-red"
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
                      variant="outlined text" 
                      rounded 
                      size="x-small" 
                      :ripple="false" 
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
                  variant="outlined"
                  rounded
                  color="secondary"
                  size="small"
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
                    variant="filled"
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
                  variant="outlined"
                  rounded
                  color="secondary"
                  size="small"
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
                    "Concluímos a verificação do seu número!"
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
                  size="small"
                  color="secondary"
                  @click="resetPassword ? closeDialog() : redirectToHome()"
                  rounded
                  variant="outlined"
                >
                  Entrar
                </v-btn>
              </div>
            </v-stepper-content>
          </v-stepper-item>
        </v-stepper>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="errorSnackbar"
      color="error"
    >
      {{ errorMessage }}

      <template v-slot:actions="{ attrs }">
        <v-btn
          variant="text"
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
    "userPhoneComponentParam",
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
        required: value => !!value || 'O número do celular deve ser preenchido',
        phoneLength: value => value && value.length < 15 ? 'O número está incorreto' : true,
        exists: true,
        requiredPassword: value => !!value || 'A senha deve ser preenchida',
        passwordLength: value => value && value.length < 8 ? 'A senha deve ter pelo menos 8 dígitos' : true,
      },
      rulesOTPValidation: {
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
      OTPData: undefined,
      errorMessage: undefined,
      errorSnackbar: false,
      sendingOTP: false,
      disableOTPInput: false,
      attempsExceed: false,
      newPassword: undefined,
      showPassword: false,
      sendingNewPassword: false,
      duplicatedPhoneMsg: "Esse número já existe no Lookmix, não é possível criar outra conta com este número",
      phoneNotFoundMsg: "Não encontramos seu número na base de dados"
    }
  },
  methods: {
    ...mapActions([
      "verifyDuplicatedPhone",
      "getOTPData",
      "sendOTP",
      "updatePassword",
      "saveUser"
    ]),
    validatePhoneDuplication (getOTP=false) {
      this.validatingPhone = true
      this.rules.exists = true

      clearTimeout(this.ongoingRequest);

      let phone = utils.formatPhoneToOnlyDigits(this.phone)

      return this.verifyDuplicatedPhone(phone)
        .then((response) => {
          const isUnique = response.data.is_unique

          // if reset password, phone must exists
          if (isUnique && this.resetPassword) {
            this.rules.exists = this.phoneNotFoundMsg
            return;
          } 
          // if creating new account, phone should not exists
          else if (!isUnique && !this.resetPassword) {
            this.rules.exists = this.duplicatedPhoneMsg
            return;
          }
          if (getOTP) {
            return this.getOTPData(phone)
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
          this.validatingPhone = false
        })
    },
    closeDialog () {
      this.clearTimer()
      this.phone = ""
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
      this.validatePhoneDuplication(true)
      this.clearOTPInput()
    },
    sendOTPCode () { // saveUser too
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
            return this.saveUser()
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
        duplicatedPhone (self) { 
          self.errorSnackbar = true
          self.errorMessage = self.duplicatedPhoneMsg
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
        phoneNotFound (self) {
          self.rules.exists = this.phoneNotFoundMsg
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
      this.$router.push('/login2')
      this.currentStep = 1
    },
    redirectToHome () {
      this.closeDialog()
      this.$router.push('/home')
      this.currentStep = 1
    },
    saveNewPassword () {
      this.sendingNewPassword = true

      const phone = utils.formatPhoneToOnlyDigits(this.phone)

      const payload = {
        phone: phone,
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