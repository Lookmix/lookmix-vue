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

    <swiper
      style="height: 563px;"
      ref="mySwiper" 
      :options="swiperOptions"
    >
      <swiper-slide 
        :style="{'width': widthCard+'px'}"
        v-for="(clothe, index) in clothes" 
        :key="index"
      >
        <ClotheForm 
          :id="clothe.id"
          :image="clothe.image"
          :widthCard="widthCard"
          @payload="setClothe($event, clothe.id)"
          @remove="removeClothe($event, index)"
        />

        <v-divider 
          :style="{'margin-top': '10px'}"
          vertical
        > 
        </v-divider>
      </swiper-slide>
    </swiper>

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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  components: {
    ClotheForm,
    Swiper,
    SwiperSlide
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
      dividerDiscount: 0,
      swiperOptions: {
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 10
      }
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
    },
    swiper() {
      return this.$refs.mySwiper.$swiper
    widthCard () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs": return 319
        case "sm": return 319
        case "md": return 500
        case "lg": return 500
        case "xl": return 500
      }
      return 319
    },
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
      this.index++
      this.swiper.slideTo(this.index, 400, false)
    },
    prev () {
      this.index--
      this.swiper.slideTo(this.index, 400, false)
    }
  }
}
</script>