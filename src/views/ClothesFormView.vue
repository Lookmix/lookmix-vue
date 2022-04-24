<template>
  <div> <!--style="margin-top: 10px;"-->
    <div style="display: flex; flex-direction: column;">
      <v-card elevation="0" v-if="!existsClothes">
        <v-card-text style="text-align: center;">
          <br/>
          <span> Adicione novas peças no seu guarda-roupa </span>
          <br/>
        </v-card-text>
      </v-card>

        <!-- :color="existsClothes ? backgroundColor : 'initial'" -->
      <v-sheet 
        elevation="0" 
        style="padding: 10px 5px; display: flex; justify-content: center;"
      >
        <v-btn 
          color="accent"
          :elevation="existsClothes ? 0 : 2"
          rounded
          :text="existsClothes"
          :large="!existsClothes"
          @click="addClothe(); loadingDialog = true;"
        >
          <v-icon>mdi-plus</v-icon>

          ADICIONAR
        </v-btn>

        <v-file-input
          style="display: none;"
          id="fileInput"
          accept="image/*"
          hide-input
          multiple
          v-model="images"
          @change="readImages()"
        ></v-file-input>
      </v-sheet>

      <v-divider v-if="existsClothes"></v-divider>
    </div>

    <div style="display: flex; overflow-x: auto;">
      <template v-for="(clothe, index) in clothes">
        <ClotheForm 
          :key="clothe.id"
          :image="clothe.image"
          @payload="setClothe($event, clothe.id)"
          @remove="removeClothe($event, index)"
        />

        <v-divider vertical style="margin-top:10px;" :key="'divider'+index"> </v-divider>
      </template>
    </div>

    <v-dialog
      v-model="loadingDialog"
      width="250"
    >
      <v-card
        width="250"
        height="250"
        style="display: flex; justify-content: center; flex-direction: column;"
      >
        <v-card-title
          style="margin: auto;margin: auto;"
        >
          Carregando...
        </v-card-title>
        <v-progress-circular
          :size="100"
          :width="10"
          color="secondary"
          indeterminate
          style="margin: auto; margin-bottom: 50px;"
        />
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="snackbarError"
      color="error"
    >
      {{ snackbarErrorMsg }}

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="snackbarError = false"
        >
          OK
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex"
import ClotheForm from "./../components/closet/ClotheForm.vue"
import { v4 as uuidv4 } from 'uuid';

export default {
  components: {
    ClotheForm
  },
  mounted () {
    if (this.clothes.length < 1) {
      this.addClothe()
    }
    this.setPreviousPage("/closet")
  },
  data () {
    return {
      clothes: [],
      images: [],
      snackbarError: false,
      snackbarErrorMsg: undefined,
      loadingDialog: false
    }
  },
  computed: {
    ...mapGetters([
      "backgroundColor"
    ]),
    existsClothes () {
      return this.clothes.length > 0
    }
  },
  methods: {
    ...mapMutations([
      "setPreviousPage",
      "setDisableSaveClothesButton"
    ]),
    addClothe () {
      const fileUpload = document.getElementById("fileInput")

      if (fileUpload !== null) {
        fileUpload.click()
      }
    },
    readImages () {
      for (let image of this.images) {
        if (!image.type.includes("image")) {
          this.snackbarErrorMsg = 'Tipo de arquivo inválido, apenas imagens são aceitas.'
          this.snackbarError = true
        }
        if (!this.snackbarError) {
          this.clothes.unshift({
            id: uuidv4(),
            image: image
          })
        }
      }
      this.images = []
      this.updateSaveButtonState()
      this.loadingDialog = false
    },
    setClothe (clothe, id) {
      const index = this.clothes.findIndex(item => item.id === id)

      if (index !== -1) {
        this.clothes[index] = { id, ...clothe }
      }
    },
    removeClothe (event, index) {
      this.clothes.splice(index, 1)
      this.updateSaveButtonState()
    },
    updateSaveButtonState () {
      let disable = false

      if (this.clothes.length < 1) {
        disable = true
      }
      this.setDisableSaveClothesButton(disable)
    }
  }
}
</script>