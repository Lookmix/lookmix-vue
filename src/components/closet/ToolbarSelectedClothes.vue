<template>
  <div>
    <v-toolbar
      :height="56"
      dense
      bottom
      flat
      color="accent"
      elevation="0"
    >
      <v-btn 
        text
        :ripple="false"
        color="primary"
        elevation="0"
        class="mx-1"
        @click="cancelSelectedClick()"
      >
        cancelar
      </v-btn>

      <v-spacer/>

      <v-btn 
        text
        :disabled="!existsSelectedClothes"
        :ripple="false"
        color="primary"
        elevation="0"
        :class="{
          'mx-1': true,
          'text--secondary': !existsSelectedClothes
        }"
        @click="editSelectedClick()"
      >
        editar
      </v-btn>

      <v-spacer/>

      <v-btn 
        text
        :disabled="!existsSelectedClothes"
        :ripple="false"
        color="primary"
        elevation="0"
        :class="{
          'mx-1': true,
          'text--secondary': !existsSelectedClothes
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
      "selectedClothesLenght"
    ]),
    existsSelectedClothes () {
      const length = this.selectedClothesLenght
      return length > 0
    },
    confirmationDescriptionText () {
      return `Você vai excluir ${this.selectedClothesLenght} peças, deseja continuar?`
    },
    selectedClothesLenght () {
      return this.selectedClothes.length
    }
  },
  methods: {
    ...mapActions([
      "deleteClothes"
    ]),
    ...mapMutations([
      "setShowToolbarSelectedClothes",
      "removeFetchSocialClotheById",
      "removeFetchCasualClotheById"
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