<template>
  <div>
    <v-btn
      :disabled="disabled"
      :style="{'margin-left': passwordReset ? '-3px' : 'unset' }"
      :text="passwordReset"
      size="small"
      rounded
      :variant="!passwordReset ? 'outlined' : 'text'"
      :color="passwordReset ? '' : 'secondary'"
      :ripple="!passwordReset"
      @click.stop="dialog = true; email = userEmailProp; !passwordReset ? onOpenDialog() : false"
    >
      {{ passwordReset ? 'REDEFINIR SENHA' : 'CRIAR' }}
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
          {{ passwordReset ? 'Redefinição de senha' : 'Confirmação de e-mail' }}
        </v-card-title>

        <v-stepper 
          v-if="dialog"
          v-model="currentStep" 
          elevation="0"
          flat 
          height="400"
          mobile
        >
          <v-stepper-header
            style="box-shadow: unset; display: none;"
          >
            <v-stepper-item
              color="primary"
              :complete="Number(currentStep) > 1"
              value="1"
            >
              <!-- E-mail -->
            </v-stepper-item>

            <v-divider></v-divider>

            <v-stepper-item
              :complete="Number(currentStep) > 2"
              value="2"
              color="primary"
            >
              <!-- Código de confirmação -->
            </v-stepper-item>

            <v-divider></v-divider>

            <v-stepper-item 
              :complete="Number(currentStep) > 3"
              value="3"
              color="primary"
            >
              <!-- Redefinição de senha -->
            </v-stepper-item>

            <v-divider></v-divider>

            <v-stepper-item
              :complete="Number(currentStep) > 4"
              value="4"
              color="primary"
            >
              <!-- Sucesso -->
            </v-stepper-item>

            <!-- TODO: Add a error step here -->

          </v-stepper-header>

          <v-stepper-window class="mt-2">
            <v-stepper-window-item value="1">
              <div style="display: flex; flex-direction: column; height: 280px;">
                <span>
                  <template v-if="!passwordReset">
                    Confira se o endereço de e-mail abaixo está correto e corrija se necessário.  
                    Vamos te enviar um código através dele.
                  </template>

                  <template v-if="passwordReset && userEmailProp">
                    Confira se o endereço de e-mail abaixo está correto e corrija se necessário.  
                    Vamos te enviar um código através dele.
                  </template>

                  <template v-if="passwordReset && !userEmailProp">
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
                    variant="filled"
                    v-model="email"
                    required
                    autocomple="off"
                    color="secondary"
                    :rules="emailRules"
                    label="E-mail *"
                    type="email"
                    placeholder="exemplo@dominio.com"
                    :loading="validatingEmail"
                    persistent-hint
                    :error-messages="emailErrorMessages"
                    @input="emailErrorMessages = []"
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
                  :loading="validatingEmail"
                  @click="getOTP()"
                >
                  ENVIAR
                </v-btn>
              </div>
            </v-stepper-window-item>

            <v-stepper-window-item value="2">
              <div style="display: flex; flex-direction: column; height: 280px;">
                <span>
                  Informe o código de seis dígitos abaixo, antes que o tempo acabe
                </span>

                <br>

                <span>
                  tempo restante: <strong> {{ timer }} </strong> segundos
                </span>

                <!-- <br> -->
                <!--
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
                -->

                <!-- TODO: add vuetify rules -->
                 <!-- pb-10 -->
                <div
                  style="max-height: 132px; min-height: 132px;"
                >
                  <v-otp-input
                    v-model="validationCode"
                    class="ms-n2 mt-1"
                    length="6"
                    placeholder="0"
                    variant="underlined"
                    :disabled="disableOTPInput || sendingOTP"
                    :error="otpInvalid"
                    @update:model-value="otpInvalid = false; otpErrorMessage = undefined"
                  >
                  </v-otp-input>
                  
                  <div 
                    v-if="otpInvalid"
                    class="text-red"
                    :style="{
                      // 'min-height': '36px',
                      'font-size': '12px',
                      // 'padding': otpInvalid ? '0px' : '18px'
                      // 'color': $refs.otpInput ? 'unset' : 'transparent'
                    }"
                  >
                    {{ otpErrorMessage }}
                    <!-- {{ $refs.otpInput ? $refs.otpInput.messagesToDisplay[0] : '' }} -->
                  </div>
                </div>

                <div>
                  <br>

                  <span>
                    Não recebeu o código ou o tempo / tentativas acabaram? 
                  </span>

                  <v-btn 
                    variant="text" 
                    rounded 
                    size="x-small" 
                    :ripple="false" 
                    color="#651FFF"
                    :disabled="sendingOTP || (timer > 0 && !attempsExceed)"
                    @click="resetStepper()"
                  >
                    REENVIAR
                  </v-btn>
                </div>
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
                  :disabled="timer === 0 || attempsExceed"
                  @click="sendOTPCode();"
                >
                  AVANÇAR
                </v-btn>
              </div>
            </v-stepper-window-item>

            <v-stepper-window-item value="3">
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
                  class="pb-7"
                  style="max-height: 116px;"
                >
                  <v-text-field
                    class="mt-3"
                    ref="passwordField"
                    variant="filled"
                    color="secondary"
                    v-model="newPassword"
                    required
                    :rules="passwordRules"
                    :append-inner-icon="showPasswordClicked ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="showPasswordClicked ? 'text' : 'password'"
                    label="Nova senha *"
                    :disabled="sendingNewPassword"
                    @click:append-inner="showPassword()"
                    :error-messages="emailErrorMessages"
                    @input="emailErrorMessages=[]"
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
                  :disabled="!formValid3"
                >
                  AVANÇAR
                </v-btn>
              </div>
            </v-stepper-window-item>

            <v-stepper-window-item value="4">
              <div
                class="d-flex flex-column"
                style="height: 280px;"
              >
                <v-icon
                  size="145"
                  color="green"
                  class="ma-auto"
                >
                  mdi-check-circle
                </v-icon>

                <br>

                <span>
                  {{ passwordReset ?  
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
                  size="small"
                  color="secondary"
                  @click="passwordReset ? closeDialog() : redirectToHome()"
                  rounded
                  variant="outlined"
                >
                  Entrar
                </v-btn>
              </div>
            </v-stepper-window-item>
          </v-stepper-window>
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
import { useRules } from "vuetify/labs/rules"

export default {
  setup () {
    return {
      // https://github.com/vuetifyjs/vuetify/issues/21552#issuecomment-2962825752
      // https://github.com/vuetifyjs/vuetify/issues/21477#issuecomment-3056764552
      emailRules: useRules(() => [
        // https://vuetifyjs.com/en/components/text-fields/#validation
        // https://vuejs.org/guide/essentials/reactivity-fundamentals
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
  directives: { mask },
  props: [
    "passwordReset",
    "userEmailProp",
    "disabled"
  ],
  data () {
    return {
      formValid: false,
      // formValid2: false,
      formValid3: false,
      currentStep: "1",
      dialog: false,
      rulesOTPValidation: {
        // required: value => !!value || 'Preencha os 6 dígitos',
        // codeLength: value => value && value.length < 6 ? 'O código está incompleto' : true,
        codeError: true
      },
      validatingEmail: false,
      validatingCode: false,
      email: undefined,
      validationCode: undefined,
      timer: 80,
      interval: undefined,
      OTPData: undefined,
      errorMessage: undefined, // TODO: rename to errorMessageSnackbar
      errorSnackbar: false,
      sendingOTP: false,
      disableOTPInput: false,
      attempsExceed: false,
      newPassword: undefined,
      showPasswordClicked: false,
      sendingNewPassword: false,
      duplicatedEmailMsg: "Esse e-mail já existe no Lookmix, não é possível criar outra conta com este e-mail",
      emailNotFoundMsg: "Este e-mail não está cadastrado",
      otpErrorMessage: undefined,
      otpInvalid: false,
      emailErrorMessages: []
    }
  },
  methods: {
    ...mapActions([
      "verifyDuplicatedEmail",
      "getOTPData2",
      "sendOTP",
      "updatePassword2",
      "saveUser2"
    ]),
    validateEmailDuplication (getOTP=false) {
      this.validatingEmail = true
      clearTimeout(this.ongoingRequest);
      const email = encodeURI(this.email)
      return this.verifyDuplicatedEmail(email)
        .then((response) => {
          const isUnique = response.data.is_unique
          // if reset password, email must exists
          if (isUnique && this.passwordReset) {
            this.emailErrorMessages = [this.emailNotFoundMsg]
            return;
          } 
          // if creating new account, email should not exists
          else if (!isUnique && !this.passwordReset) {
            this.emailErrorMessages = [this.duplicatedEmailMsg]
            return;
          }
          if (getOTP) {
            const payload = {
              email: email,
              isPasswordReset: this.passwordReset ? 1 : 0
            }
            return this.getOTPData2(payload)
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
      this.checkOTPEmptyAndLength()
      if (this.otpInvalid) {
        return;
      }
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
            if (this.passwordReset) {
              this.currentStep = "3"
              return;
            }
            return this.saveUser2()
              .then((response) => {
                this.currentStep = "4"
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

      this.currentStep = "2"

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
          self.otpErrorMessage = "Suas tentativas esgoratam. Toque em reenviar para receber um novo código."
          self.otpInvalid = true
          self.disableOTPInput = true
          self.attempsExceed = true
          return;
        },
        invalidOTP (self) {
          self.clearOTPInput()
          self.otpErrorMessage = "Código inválido, tente novamente."
          self.otpInvalid = true
          return
        },
        expired (self) {
          self.clearOTPInput()
          self.otpErrorMessage = "Código expirado. Toque em reenviar para receber um novo código."
          self.otpInvalid = true
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
          self.emailErrorMessages = [self.emailNotFoundMsg]
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
      // this.$refs.otpInput.otp = []
      // this.$refs.otpInput.errorBucket = []
      this.otpInvalid = false
      this.otpErrorMessage = undefined
      this.validationCode = undefined
      // this.formValid2 = false
    },
    onOpenDialog () {
      this.$emit("opened", true)
    },
    redirectToLogin () {
      this.closeDialog()
      this.$router.push('/login2')
      this.currentStep = "1"
    },
    redirectToHome () {
      this.closeDialog()
      this.$router.push('/home')
      this.currentStep = "1"
    },
    saveNewPassword () {
      this.sendingNewPassword = true
      const payload = {
        email: this.email,
        password: this.newPassword
      }
      this.updatePassword2(payload)
        .then((response) => {
          this.currentStep = "4"
        })
        .catch((exception) => {
          const response = exception.response

          if (response) {
            const error = response.data.error
  
            this.handleResetPasswordErrors(error)
            this.newPassword = undefined
            this.sendingNewPassword = false
            this.resetStepper()
            console.log(exception)
          }
        }) 
        .finally(() => {})
    },
    checkOTPEmptyAndLength () {
      if (!this.validationCode || this.validationCode.length < 6) {
        this.otpInvalid = true
        this.otpErrorMessage = "Preencha os 6 dígitos"
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
    },
    resetStepper () {
      this.currentStep = "1"
      this.clearTimer()
      this.clearOTPInput()
      this.attempsExceed = false
    }
  }
}
</script>

<style scoped>

</style>