<template>
  <div>
    <div 
      :style="{
        'height': maxHeight+'px',
        'display': !existsClothes ? 'flex' : 'none', 
        'flex-direction': 'column',
      }"
    >
      <v-card 
        elevation="0"
        :min-height="maxHeight"
        :max-height="maxHeight"
      >  
        <v-card-text style="text-align: center;">
          <br/>

          <span v-if="!edit"> 
            Adicione novas peças ao seu closet
          </span>

          <span v-else>
            Volte para o seu closet e selecione as peças 
            <br/>
            que deseja atualizar
          </span>

          <br/>

          <div
            style="padding: 10px 5px; display: flex; justify-content: center;"
          >
            <button-add-clothe :icon-button="false"/>

            <v-btn
              v-if="edit"
              color="primary"
              :elevation="2"
              rounded
              large
              @click="redirectToCloset()"
            >
              <v-icon></v-icon>

              ver peças
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </div>

    <div
      v-if="existsClothes"
      :style="{ 
        'height': swiperHeight+'px', 
        'margin-top': '10px' 
      }"
      class="swiper"
    >
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div 
          v-for="(clothe, index) in clothes" 
          :key="clothe._id"
          class="swiper-slide"
          :style="{'width': cardWidth+'px'}"
        >
          <ClotheForm 
            :id="clothe._id"
            :key="clothe._id"
            :image="clothe.image"
            :editClothe="edit ? clothe : undefined"
            :cardWidth="cardWidth"
            :cardHeight="swiperHeight"
            @payloadSave="setClothe($event, clothe._id)"
            @payloadUpdate="setUpdatedClothe($event, clothe._id)"
            @remove="removeClothe($event, index)"
          />
        </div>
      </div>
    </div>

    <v-toolbar
      v-if="existsClothes"
      dense
      bottom
      flat
      color="primary"
      elevation="0"
    >
      <v-btn 
        small
        style="margin: 0px 10px;"
        icon 
        @click="previousSlide()" 
        :disabled="pageCount === 1"
      >
        <v-icon color="white">
          mdi-chevron-left
        </v-icon>
      </v-btn>

      <v-spacer/>

      <span style="font-size: 18px; color: white; font-weight: bold;"> 
        {{ pageCount }} de {{ totalClothes }}
      </span>

      <v-spacer/>

      <v-btn 
        small
        style="margin: 0px 10px;"
        icon 
        @click="nextSlide()" 
        :disabled="pageCount === clothes.length"
      >
        <v-icon color="white">
          mdi-chevron-right
        </v-icon>
      </v-btn>
    </v-toolbar>

    <dialog-loading
      :intervalInMiliseconds="edit ? 250 : 3000"
      :loadingTitle="loadingTitleDialog"
      :showLoadingDialog="showLoadingDialog"
      :totalCircularProgressParts="totalClothes"
      :showSuccessFeedback="hasBeenClotheUploadedWithSuccess"
      :successDescription="successDescriptionDialog"
      :successActionText="'VER CLOSET'"
      :errorDescription="errorDescriptionDialog"
      :errorActionText="'FECHAR'"
      @success="redirectToCloset();"
      @error="setLoadingDialog(false); setClotheUploadSuccess(undefined); uploadProgress=0;"
    />

  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex"
import ClotheForm from "./../components/closet/ClotheForm.vue"
import ButtonAddClothe from "./../components/closet/ButtonAddClothe.vue"
import DialogLoading from "./../components/DialogLoading.vue"
/*global Swiper*/

export default {
  components: {
    ClotheForm,
    ButtonAddClothe,
    DialogLoading
  },
  props: [
    "edit"
  ],
  beforeDestroy () {
    this.clearUploadInterval()
    this.resetClothes()
    this.resetUpdatedClothes()
    if (this.edit) {
      this.setToolbarTitle("Lookmix")
    }
  },
  mounted () {
    this.initSwiper()
    this.setPreviousPage("/closet")
    if (this.edit) {
      this.setToolbarTitle("Atualizar peças")
      this.updateSaveButtonState(false)
    }
    if (this.categories.length < 1) {
      this.getCategories()
    }
    if (this.occasions.length < 1) {
      this.getOccasions()
    }
    if (this.seasons.length < 1) {
      this.getSeasons()
    }
  },
  data () {
    return {
      index: 0,
      uploadProgress: 0,
      uploadInterval: {},
      swiperInstance: undefined
    }
  },
  watch: {
    totalClothes: {
      handler: function (val, oldVal) {
        if (val > oldVal) {
          setTimeout(() => {
            this.swiperInstance.update()
            this.slideToBegin()
          }, 250)
        }
      },
      deep: true
    },
  },
  computed: {
    ...mapGetters([
      "clothes",
      "showLoadingDialog",
      "hasBeenClotheUploadedWithSuccess",
      "categories",
      "occasions",
      "seasons",
      "updatedClothes",
      "maxHeight"
    ]),
    existsClothes () {
      const existsClothes = this.clothes.length > 0
      this.setShowAddClotheButton(existsClothes)
      return existsClothes
    },
    pageCount () {
      return this.index + 1
    },
    swiperHeight () {
      const header = 56
      const footer = 48
      const marginTop = 10
      let innerHeight = window.innerHeight
      innerHeight = innerHeight - header - footer - marginTop
      return innerHeight
    },
    cardWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs": return 319
        case "sm": return 319
        case "md": return 500
        case "lg": return 500
        case "xl": return 500
      }
      return 319
    },
    totalClothes () {
      return this.clothes.length
    },
    uploadProgressFormatted () {
      return this.uploadProgress.toFixed()
    },
    successDescriptionDialog () {
      if (!this.edit) {
        return "Suas peças foram salvas, veja como ficou seu closet"
      }
      return "Suas peças foram atualizadas, veja como ficou seu closet"
    },
    loadingTitleDialog () {
      if (!this.edit) {
        return "Salvando peças..."
      }
      return "Atualizando peças..."
    },
    errorDescriptionDialog () {
      if (!this.edit) {
        return "Um erro impediu o cadastro das suas peças, tente de novo depois"
      }
      return "Um erro impediu a atualização das suas peças, tente de novo depois"
    }
  },
  methods: {
    ...mapActions([
      "getCategories",
      "getOccasions",
      "getSeasons"
    ]),
    ...mapMutations([
      "setPreviousPage",
      "setDisableSaveClothesButton",
      "setLoadingDialog",
      "setShowAddClotheButton",
      "addClotheOnIndex",
      "removeClotheOnIndex",
      "setClotheUploadSuccess",
      "resetClothes",
      "resetUpdatedClothes",
      "setToolbarTitle",
      "addUpdatedClotheOnIndex",
      "addUpdatedClothe"
    ]),
    setClothe (clothe, _id) {
      const index = this.clothes.findIndex(item => item._id === _id)

      if (index !== -1) {
        this.addClotheOnIndex({ index: index, value: { _id, ...clothe } })
      }
    },
    setUpdatedClothe (clothe, _id) {
      const index = this.updatedClothes.findIndex(item => item._id === _id)

      if (index !== -1) {
        this.addUpdatedClotheOnIndex({ index: index, value: { _id, ...clothe } })
        return;
      }
      this.addUpdatedClothe({ _id, ...clothe })
    },
    removeClothe (event, index) {
      this.removeClotheOnIndex(index)
      this.updateSaveButtonState()
      if (this.index > 0) {
        this.previousSlide()
      }
      setTimeout(() => {
        this.swiperInstance.update()
      }, 250)
    },
    updateSaveButtonState () {
      let disable = false
      if (this.clothes.length < 1) {
        disable = true
      }
      this.setDisableSaveClothesButton(disable)
    },
    slideToBegin () {
      if (this.swiperElement()) {
        this.index = 0
        this.swiperElement().slideTo(this.index, 400, false)
      }
    },
    nextSlide () {
      if (this.swiperElement()) {
        this.index++
        this.swiperElement().slideTo(this.index, 400, false)
      }
    },
    previousSlide () {
      if (this.swiperElement()) {
        this.index--
        this.swiperElement().slideTo(this.index, 400, false)
      }
    },
    onSlideChange (event) {
      this.index = event.activeIndex
    },
    clearUploadInterval () {
      clearInterval(this.uploadInterval)
    },
    redirectToCloset () {
      this.setLoadingDialog(false)
      this.setClotheUploadSuccess(undefined)
      this.$router.push("/closet")
      this.resetClothes()
    },
    initSwiper(initialSlide=0) {
      this.swiperInstance = new Swiper(".swiper", {
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        initialSlide: initialSlide
      });
      const self = this
      const eventName = "slideChangeTransitionEnd"
      this.swiperInstance.on(eventName, function () {
        self.index = this.activeIndex
      })
    },
    swiperElement () {
      return document.querySelector(".swiper").swiper;
    }
  }
}
</script>

<style scoped>
.swiper {
  width: 100%;
  /* height: 545px; */
}
</style>