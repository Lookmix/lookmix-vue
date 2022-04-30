<template>
  <div> <!--style="margin-top: 10px;"-->
    <div style="display: flex; flex-direction: column;">
      <v-card elevation="0" v-if="!existsClothes">
        <v-card-text style="text-align: center;">
          <br/>
          <span> Adicione novas peças no seu guarda-roupa </span>
          <br/>
        </v-card-text>

        <v-file-input
          style="display: none;"
          id="fileInput"
          accept="image/*"
          hide-input
          multiple
          v-model="images"
          @change="readImages()"
        ></v-file-input>
      </v-card>

        <!-- :color="existsClothes ? backgroundColor : 'initial'" -->
      <v-sheet 
        v-if="!existsClothes"
        elevation="0" 
        style="padding: 10px 5px; display: flex; justify-content: center;"
      >
        <v-btn 
          color="accent"
          :elevation="existsClothes ? 0 : 2"
          rounded
          :text="existsClothes"
          :large="!existsClothes"
          @click="addClothe(); setLoadingDialog(true);"
        >
          <v-icon>mdi-plus</v-icon>

          ADICIONAR
        </v-btn>
      </v-sheet>

      <!-- <v-divider v-if="existsClothes"></v-divider> -->
    </div>

    <div style="display: flex; overflow-x: hidden;"
      v-touch="{
        left: () => next(),
        right: () => prev(),
      }"
    >
      <template v-for="(clothe, index) in clothes">
        <ClotheForm 
          :key="clothe.id"
          :id="clothe.id"
          :style="{
            'transform': cssTranslate,
            'transition-delay': '0s',
            'transition-duration': '0.6s'
          }"
          :image="clothe.image"
          @payload="setClothe($event, clothe.id)"
          @remove="removeClothe($event, index)"
        />

        <v-divider 
          :style="{
            'transform': cssTranslate,
            'transition-delay': '0s',
            'transition-duration': '0.6s',
            'margin-top': '10px'
          }"
          vertical 
          :key="'divider'+index"> 
        </v-divider>
          <!-- style="margin-top:10px;"  -->
      </template>
    </div>

    <v-toolbar
      v-if="existsClothes"
      dense
      bottom
      flat
      color="accent"
      elevation="0"
    >
      <v-btn icon @click="prev()" :disabled="pageCount === 1">
        <v-icon color="white">
          mdi-chevron-left
        </v-icon>
      </v-btn>
      <v-spacer/>
      <span style="font-size: 18px; color: white; font-weight: bold;"> 
        {{ pageCount }} de {{ clothes.length }}
      </span>
      <v-spacer/>
      <v-btn icon @click="next()" :disabled="pageCount === clothes.length">
        <v-icon color="white">
          mdi-chevron-right
        </v-icon>
      </v-btn>
    </v-toolbar>

    <v-dialog
      v-model="loadingDialog"
      width="250"
      persistent
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
import { v4 as uuidv4 } from "uuid"

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
      translatePixels: 0,
      index: 0,
      lastItemDiscount: 0,
      dividerDiscount: 0
    }
  },
  computed: {
    ...mapGetters([
      "backgroundColor",
      "loadingDialog"
    ]),
    existsClothes () {
      const existsClothes = this.clothes.length > 0
      this.setShowAddClotheButton(existsClothes)
      return existsClothes
    },
    cssTranslate () {
      return `translate(${this.translatePixels}px, 0%)`
    },
    pageCount () {
      return this.index + 1
    }
  },
  methods: {
    ...mapMutations([
      "setPreviousPage",
      "setDisableSaveClothesButton",
      "setLoadingDialog",
      "setShowAddClotheButton"
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
      this.setLoadingDialog(false)
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
    },
    next () {
      // if (this.index+1 === 1) {
      //   this.index++
      //   this.dividerDiscount = 1
      //   this.translatePixels += -320 + this.dividerDiscount
      //   return;     
      // }
      if (this.index+1 === this.clothes.length - 1) { // last but one item
        this.index++
        this.lastItemDiscount = 30
        this.dividerDiscount = 1
        this.translatePixels += (-339 + this.lastItemDiscount) + this.dividerDiscount
        return;
      }
      if (this.index+1 === this.clothes.length) { // last item
        return;
      }
      this.index++
      this.dividerDiscount = 1
      this.translatePixels += -339 + this.dividerDiscount
    },
    prev () {
      if (this.lastItemDiscount) {
        this.index--
        this.dividerDiscount = -1
        this.translatePixels += (339 - this.lastItemDiscount) - this.dividerDiscount
        this.lastItemDiscount = 0
        return;
      }
      if (this.index+1 === 1) {
        return;
      }
      this.index--
      this.dividerDiscount = -1
      this.translatePixels += 339 + this.dividerDiscount
    }
  }
}
</script>