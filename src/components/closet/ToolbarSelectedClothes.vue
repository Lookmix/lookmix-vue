<template>
  <div>
    <v-toolbar
      density="compact"
      bottom
      flat
      color="primary"
      elevation="0"
    >
      <v-toolbar-items class="w-100 justify-space-evenly">
        <v-btn 
          variant="text"
          :ripple="false"
          color="backgroundBase"
          elevation="0"
          class="mx-0"
          size="small"
          @click="cancelSelectedClick()"
        >
          CANCELAR
        </v-btn>
  
        <v-btn 
          variant="text"
          :disabled="!existsSelectedClothes"
          :ripple="false"
          color="backgroundBase"
          elevation="0"
          :class="{
            'mx-0': true
          }"
          size="small"
          @click="editSelectedClick()"
        >
          ATUALIZAR
        </v-btn>

        <v-btn 
          variant="text"
          :disabled="!existsSelectedClothes"
          :ripple="false"
          color="backgroundBase"
          elevation="0"
          :class="{
            'mx-0': true
          }"
          size="small"
          @click="removeSelectedClick()"
        >
          EXCLUIR
        </v-btn>
      </v-toolbar-items>
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
      :showLoadingDialog="showLoadingDialog"
      :totalCircularProgressParts="selectedClothesLenght"
      :showSuccessFeedback="hasBeenDeletedWithSuccess"
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
  mounted () {
    if (this.occasions.length < 1) {
      this.getOccasions()
    }
    if (this.seasons.length < 1) {
      this.getSeasons()
    }
  },
  data () {
    return {
      showLoadingDialog: false,
      confirmationDialog: false,
      hasBeenDeletedWithSuccess: undefined
    }
  },
  computed: {
    ...mapGetters([
      "selectedClothes",
      "selectedClothesLenght",
      "fetchCasualClothes",
      "fetchSocialClothes",
      "occasions",
      "seasons"
    ]),
    existsSelectedClothes () {
      const length = this.selectedClothesLenght
      return length > 0
    },
    confirmationDescriptionText () {
      return `Você vai excluir ${this.selectedClothesLenght} peça(s), deseja continuar?`
    }
  },
  methods: {
    ...mapActions([
      "deleteClothes",
      "getOccasions",
      "getSeasons"
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
        this.showLoadingDialog = true
        this.deleteClothes(this.selectedClothes)
          .then((response) => {
            this.hasBeenDeletedWithSuccess = true
          })
          .catch((error) => {
            this.hasBeenDeletedWithSuccess = false
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