<template>
  <div>
    <v-toolbar
      :height="56"
      dense
      bottom
      flat
      color="primary"
      elevation="0"
    >
      <v-btn 
        text
        :ripple="false"
        color="backgroundBase"
        elevation="0"
        class="mx-0"
        @click="cancelSelectedClick()"
      >
        cancelar
      </v-btn>

      <v-spacer/>

      <v-btn 
        text
        :disabled="!existsSelectedClothes"
        :ripple="false"
        color="backgroundBase"
        elevation="0"
        :class="{
          'mx-0': true
        }"
        @click="editSelectedClick()"
      >
        atualizar
      </v-btn>

      <v-spacer/>

      <v-btn 
        text
        :disabled="!existsSelectedClothes"
        :ripple="false"
        color="backgroundBase"
        elevation="0"
        :class="{
          'mx-0': true
        }"
        @click="removeSelectedClick()"
      >
        excluir
      </v-btn>
    </v-toolbar>

    <DialogConfirmation 
      :show="confirmationDialog"
      :description="confirmationDescriptionText"
      @confirm="confirmationDialogResponse($event)"
    />

    <DialogLoading
      :errorDescription="'Um erro impediu a remoção das peças, tente de novo depois'"
      :intervalInMiliseconds="1500"
      :loadingTitle="'Excluindo...'"
      :successDescription="'Peças excluídas com sucesso'"
      :loadingDialog="loadingDialog"
      :totalCircularProgressParts="selectedClothesLenght"
      :successFeedback="deletedWithSuccess"
      @success="successOkClick()"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import DialogLoading from "./../DialogLoading.vue"
import DialogConfirmation from  "./../DialogConfirmation.vue"

export default {
  components: {
    DialogLoading,
    DialogConfirmation
  },
  data () {
    return {
      loadingDialog: false,
      confirmationDialog: false,
      deletedWithSuccess: undefined
    }
  },
  computed: {
    ...mapGetters([
      "selectedClothes",
      "selectedClothesLenght",
      "fetchCasualClothes",
      "fetchSocialClothes",
    ]),
    existsSelectedClothes () {
      const length = this.selectedClothesLenght
      return length > 0
    },
    confirmationDescriptionText () {
      return `Você vai excluir ${this.selectedClothesLenght} peças, deseja continuar?`
    }
  },
  methods: {
    ...mapActions([
      "deleteClothes"
    ]),
    ...mapMutations([
      "setShowToolbarSelectedClothes",
      "removeFetchSocialClotheById",
      "removeFetchCasualClotheById",
      "setEditClothes"
    ]),
    cancelSelectedClick () {
      this.setShowToolbarSelectedClothes(false)
      this.$emit("cancelSelect")
    },
    confirmationDialogResponse (confirm) {
      this.confirmationDialog = false

      if (confirm) {
        this.loadingDialog = true
        this.deleteClothes(this.selectedClothes)
          .then((response) => {
            this.deletedWithSuccess = true
          })
          .catch((error) => {
            this.deletedWithSuccess = false
            console.log(error)
          })
      }
    },
    removeSelectedClick () {
      this.confirmationDialog = true
      this.$emit("removeSelected")
    },
    editSelectedClick () {
      const clotheIds = this.selectedClothes.clothe_ids
      const clothes = []

      for (let id of clotheIds) {
        const casualClothe = this.fetchCasualClothes.filter(clothe => clothe._id === id)[0]

        if (casualClothe) {
          clothes.push(casualClothe)
        }
        const socialClothe = this.fetchSocialClothes.filter(clothe => clothe._id === id)[0]

        if (socialClothe) {
          clothes.push(socialClothe)
        }
      }
      this.setEditClothes(clothes)

      const clotheFormRouteName = "clothesForm"

      this.$router.push({ 
        name: clotheFormRouteName, 
        query: { edit: true }
      })
      this.$emit("editSelected")
    },
    successOkClick () {
      this.removeClothesFromState()
      this.setShowToolbarSelectedClothes(false)
    },
    removeClothesFromState () {
      const clotheIds = this.selectedClothes.clothe_ids
      for (let id of clotheIds) {
        this.removeFetchSocialClotheById(id)
        this.removeFetchCasualClotheById(id)
      }
    }
  }
}
</script>