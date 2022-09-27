<template>
  <div>
    <v-btn
      icon
      color="primary"
      @click="saveDailyLookSetupClick()"
    >
      <v-icon>
        mdi-check-outline
      </v-icon>
    </v-btn>

    <dialog-loading
      :showLoadingDialog="showLoadingDialog"
      :intervalInMiliseconds="200"
      :loadingTitle="loadingTitleDialog"
      :totalCircularProgressParts="totalDays"
      :showSuccessFeedback="hasBeenDailyLookSetupUpdatedWithSuccess"
      :successDescription="successDescriptionDialog"
      :successActionText="'VER LOOKS'"
      :errorDescription="errorDescriptionDialog"
      :errorActionText="'FECHAR'"
      @success="redirectToDailyLook();"
      @error="setLoadingDialog(false); setDailyLookSetupUpdatedWithSuccess(undefined);"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DialogLoading from "./DialogLoading.vue"

export default {
  components: {
    DialogLoading
  },
  data () {
    return {
      showLoadingDialog: false,
      loadingTitleDialog: "Atualizando sua rotina...",
      totalDays: 0,
      hasBeenDailyLookSetupUpdatedWithSuccess: undefined,
      successDescriptionDialog: "Rotina atualizada com sucesso",
      errorDescriptionDialog: "Houve um erro ao tentar salvar sua rotina, tente de novo"
    }
  },
  methods: {
    ...mapActions([
      "updateDailyLookSetup"
    ]),
    saveDailyLookSetupClick () {
      this.showLoadingDialog = true
      if (!this.dailyLookSetup || this.dailyLookSetup.days_of_week) { // don't update
        this.hasBeenDailyLookSetupUpdatedWithSuccess = true
        return;
      }
      this.totalDays = this.dailyLookSetup.length
      const dailyLookSetup = this.dailyLookSetup.map(item => item) // copy
      for (let day of dailyLookSetup) {
        day["occasions"] = day.occasions.map(occasion => {
          let newOccasion = {
            casual: occasion.casual,
            social: occasion.social,
            occasion_id: occasion._id
          }
          return newOccasion
        })
      }
      if (dailyLookSetup.length > 0) {
        this.updateDailyLookSetup(dailyLookSetup)
          .then((response) => {
            this.hasBeenDailyLookSetupUpdatedWithSuccess = true
          })
          .catch((error) => {
            this.hasBeenDailyLookSetupUpdatedWithSuccess = false
            console.log(error)
          })
      }
    },
    redirectToDailyLook () {
      this.$router.push("/daily-look")
    },
    setLoadingDialog(value) {
      this.showLoadingDialog = value
    },
    setDailyLookSetupUpdatedWithSuccess (value) {
      this.hasBeenDailyLookSetupUpdatedWithSuccess = value
    }
  },
  computed: {
    ...mapGetters([
      "dailyLookSetup"
    ])
  }
}
</script>

<style scoped>
</style>